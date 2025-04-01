# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-03-07

### Changed features

- Transitioned to a new endgoal by creating template for the trips, scrapbook, and homepage
- Configured back4app as the main database management for local development

### New features

- Toggling and creating reviews
- Navigation bar

## [0.3.0] - 2025-04-02

### Changed features

- Updated design of the header, as well as the start of an implementation of a color theme

### New features

- User authentication, including login, register, and logout
- Pages that depend on user authentication are now protected. Routes that are protected will redirect to require authentication if the user is not logged in
- Development of the home page