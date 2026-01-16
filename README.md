# IPL-social

exam by **Jalal Bensalah**  
VINCI email: jalal.bensalah@student.vinci.be\
Repository URL: https://github.com/jalal-bensalah-vinci/IPL-social

## Description

This project contains an **`emailChecker`** function that checks whether an email is valid according to the following criteria:  
- It must contain at least one @
- It must contain at least one dot in the domain name (and not the last character)
- It cannot contain any spaces
- It must have text before and after the @

All unit tests were written with **Jest** to validate the behavior of this function.

## Installation

Clone the repository and install the dependencies:  

```bash
git clone https://github.com/jalal-bensalah-vinci/IPL-social
cd IPL-social
npm install
```

# Tests

The tests are defined to check all scenarios:
- Email does not contain the `@` character: invalid email
- Email does not contain a dot in the domain name: invalid email
- Email ends with a dot: invalid email
- Email contains spaces: invalid email
- Email does not contain text before the `@` character: invalid email
- Email does not contain text after the `@` character: invalid email
- Email is correctly formatted: valid email


Run the tests:
```bash
npm test
```
All tests pass successfully.

P-S: I have deleted the branch (dev) I worked on after the Pull Request
