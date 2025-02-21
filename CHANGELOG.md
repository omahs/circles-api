# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.7.2] - 2022-12-02

### Changed

- Update circles-core and use the GnosisSafeL2 [#143](https://github.com/CirclesUBI/circles-api/pull/143)

## [1.7.1] - 2022-11-25

### Fixed

- Increase timeout for finding and updating steps [#139](https://github.com/CirclesUBI/circles-api/pull/139)

### Changed

- Update api with safe-contract 1.3.0 [#139](https://github.com/CirclesUBI/circles-api/pull/139)
- Bump moment-timezone from 0.5.34 to 0.5.39 [#140](https://github.com/CirclesUBI/circles-api/pull/140)
- Bump apollo-server-core from 3.10.0 to 3.11.1 [#141](https://github.com/CirclesUBI/circles-api/pull/141)
- Update GH action dependencies [#142](https://github.com/CirclesUBI/circles-api/pull/142)

## [1.7.0] - 2022-08-23

### Added

- Update user profile endpoint [#38](https://github.com/CirclesUBI/circles-api/pull/38), [#128](https://github.com/CirclesUBI/circles-api/pull/128) 
- Add get user email endpoint: [#128](https://github.com/CirclesUBI/circles-api/pull/128)

### Changed

- Update dependencies [#120](https://github.com/CirclesUBI/circles-api/pull/120), [#121](https://github.com/CirclesUBI/circles-api/pull/121), [#126](https://github.com/CirclesUBI/circles-api/pull/126)
- Update pathfinder to latest commit [chriseth/pathfinder@41f5eda](https://github.com/chriseth/pathfinder/commit/41f5eda7941e35dc67ebdb04a842eb7d65c810ef) 
- Change format of edges file from json to csv [#123](https://github.com/CirclesUBI/circles-api/pull/123)
- Update circles-transfer dependency to be compatible with the new pathfinder version [#123](https://github.com/CirclesUBI/circles-api/pull/123)

## [1.6.0] - 2022-06-06

### Removed

-  Remove Check transfer steps functionality from the findTransferSteps service [#119](https://github.com/CirclesUBI/circles-api/pull/119)

### Added

- Create a new route to update transitive transfer path [#119](https://github.com/CirclesUBI/circles-api/pull/119)

## [1.5.0] - 2022-05-13

### Added

- Check transfer steps before returning them [#103](https://github.com/CirclesUBI/circles-api/pull/103)

## [1.4.0] - 2022-03-29

### Added

- Update web3 method to subscribe to eth events [#113](https://github.com/CirclesUBI/circles-api/pull/113)
- Add log with graph endpoint [#114](https://github.com/CirclesUBI/circles-api/pull/114)

## [1.3.22] - 2021-12-17

### Changed

- Change graph health query [#101](https://github.com/CirclesUBI/circles-api/pull/101)

## [1.3.21] - 2021-12-16

### Fixed

- Update queries and endpoints for graph-node v0.25.0 [#96](https://github.com/CirclesUBI/circles-api/pull/96)

## [1.3.20] - 2021-10-28

### Removed

- Do not run syncFullGraph task
- Do not destroy the edge in the db when there is an error updating the edge
- Delete unused file: edgesGraph.js

## [1.3.16] - 2021-10-05

### Added

- Debug graph errors [#95](https://github.com/CirclesUBI/circles-api/pull/95)

## [1.3.15] - 2021-10-04

### Fixed

- Use last id instead of skip for pagination in graph queries with more than 5000 items in result [#94](https://github.com/CirclesUBI/circles-api/pull/94)

## [1.3.14] - 2021-10-01

### Changed

- Migrate ubuntu-16.04 workflows to ubuntu-18.04 [#93](https://github.com/CirclesUBI/circles-api/pull/93)

## [1.3.13] - 2021-10-01

### Added

- Run a task to sync the full graph every week [#88](https://github.com/CirclesUBI/circles-api/pull/88)
- Create RELEASE.md

## [1.3.12] - 2021-06-22

### Changed

- Improve search for usernames [#86](https://github.com/CirclesUBI/circles-api/pull/86)
- Introduce case insensitivity for usernames [#85](https://github.com/CirclesUBI/circles-api/pull/85)

## [1.3.11] - 2021-05-03

### Fixed

- Negative buffer fix [#76](https://github.com/CirclesUBI/circles-api/pull/76)

## [1.3.8] - 2021-04-28

### Fixed

- Add negative buffer to trust edges [#74](https://github.com/CirclesUBI/circles-api/pull/74)

## [1.3.7] - 2021-04-21

### Fixed

- Docker: Do not wait for graph in entrypoint but in program [#71](https://github.com/CirclesUBI/circles-api/pull/71)

## [1.3.6] - 2021-04-21

### Changed

- Increase transfer step process timeout [cda7a01](https://github.com/CirclesUBI/circles-api/commit/cda7a0101271cf9f8f351fdf69e66dc2f552f96c)

## [1.3.5] - 2021-04-21

### Changed

- Docker: Use bash version of wait-for-it script [745cf5b](https://github.com/CirclesUBI/circles-api/commit/745cf5ba2e404f2a2d5b2b5432ddc09b9cbc1e80)

## [1.3.4] - 2021-03-29

### Fixed

- Docker: Remove multi-step build as it breaks `sharp` [99db714](https://github.com/CirclesUBI/circles-api/commit/99db7148924c2e536ba429b9815a9196d72078af)

## [1.3.3] - 2021-03-29

### Fixed

- Docker: Start worker process when graph node is available [#63](https://github.com/CirclesUBI/circles-api/pull/63)

## [1.3.2] - 2021-03-12

### Added

- Docker builds are now built and uploaded to our new DockerHub page: https://hub.docker.com/r/joincircles/circles-api

### Changed

- Update dependencies [70c0b12](https://github.com/CirclesUBI/circles-api/commit/70c0b120536006610d76a293bad851563ff375cb)
- Improve docker build time [b4f17c0](https://github.com/CirclesUBI/circles-api/commit/b4f17c0e78075475c81eb4f3f9bcaf8f6d845b7b)

## [1.3.1] - 2021-03-12

### Changed

- Worker: Changed paths of `edges.json` file and `pathfinder` executable. [#58](https://github.com/CirclesUBI/circles-api/pull/58)

## [1.3.0] - 2021-03-11

### Added

- Worker: Introduce new indexing task using `bull` scheduler. [#24](https://github.com/CirclesUBI/circles-api/pull/24)
