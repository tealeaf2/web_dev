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

## [1.0.0] - 2025-04-29

### Changed features

- Revamped the UI of the the trips page to not only allow for searching, but to also autopopulate back4app with "Place" instances
- Color scheme of UI changed to a more instagram style design

### New features

- Users can now create, edit, and publish digibooks. Editing includes common functionality of a normal canvas editor.
- For the scrapbooks page, users can now organize their digibooks into "Uploaded" and "Recent" categories, allowing for editing and deletion of digibooks.
- Now allows for editing the size of the canvas page, making templates possible in the future.
- Users can also save and download their digibooks into PDFs.
- Search is now paired with Google Autocomplete API.
- With every search, digibooks are now loaded in relation to the searched location. Users can also comment on other digibooks.
- Searching now displays the ratings, address, and the name of the location.