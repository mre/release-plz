use std::fs;

use cargo_metadata::Version;
use git_cmd::git_in_dir;
use release_plz_core::read_package;

use crate::helpers::comparison_test::ComparisonTest;

#[test]
fn up_to_date_project_is_not_touched() {
    let comparison_test = ComparisonTest::new();

    comparison_test.run_update();

    // the update should have not changed anything
    assert!(comparison_test.are_projects_equal());
}

#[test]
fn version_is_updated_when_project_changed() {
    let comparison_test = ComparisonTest::new();

    fs::write(
        comparison_test.local_project().join("src").join("lib.rs"),
        "do amazing things",
    )
    .unwrap();
    git_in_dir(&comparison_test.local_project(), &["add", "."]).unwrap();
    git_in_dir(
        &comparison_test.local_project(),
        &["commit", "-m", "feat: do awesome stuff"],
    )
    .unwrap();

    comparison_test.run_update();

    // the update should have changed the version
    assert!(!comparison_test.are_projects_equal());

    let local_package = read_package(comparison_test.local_project()).unwrap();
    assert_eq!(local_package.version, Version::new(0, 1, 1));
}