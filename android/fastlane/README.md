fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android idopterlabs

```sh
[bundle exec] fastlane android idopterlabs
```

Submit a new Beta Build to Firebase App Distribution (Only Idopterlabs)

### android staging

```sh
[bundle exec] fastlane android staging
```

Submit a new Beta Build to Firebase App Distribution (Staging)

### android production

```sh
[bundle exec] fastlane android production
```

Deploy a new version to the Google Play

### android increment_version

```sh
[bundle exec] fastlane android increment_version
```

Increment the build number to an unreleased release version

### android create_groups

```sh
[bundle exec] fastlane android create_groups
```

Create default groups and send invites default

### android discord

```sh
[bundle exec] fastlane android discord
```

Send notification latest build to Discord

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
