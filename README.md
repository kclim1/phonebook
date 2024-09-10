# Phonebook

## Overview

The Phone Book Application is a console-based tool for managing contact information. It allows users to add, update, delete, and search for contacts. Each contact entry includes details such as name, phone number, and any additional relevant information. The application supports sorting contacts based on different criteria such as name or phone number.

## Features

- **Add Contact:** Allows users to create new contact entries.
- **Update Contact:** Enables users to modify details of existing contacts.
- **Delete Contact:** Permits users to remove contacts from the phone book.
- **Search Contacts:** Provides functionality to find contacts by name or phone number.
- **Sort Contacts:** Supports sorting of contacts based on name, phone number, or other criteria.

## Data Structures

- **`Person` Class:** Represents an individual contact entry with properties such as name, phone number, and additional details.
- **`PhoneBook` Class:** Manages a collection of `Person` objects, providing methods for adding, updating, deleting, and searching contacts.
  - **Array:** Used for storing and iterating through contacts.
  - **Map:** Used for fast lookup of contacts by phone number.
  - **Set:** Ensures unique entries and helps prevent duplicate contacts.


