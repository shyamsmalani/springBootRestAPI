$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("security.feature");
formatter.feature({
  "line": 1,
  "name": "Security check",
  "description": "",
  "id": "security-check",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Customer cannot create user",
  "description": "",
  "id": "security-check;customer-cannot-create-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a AGENT",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I get a FORBIDDEN response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AGENT",
      "offset": 7
    }
  ],
  "location": "SecuritySteps.I_am_a__(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FORBIDDEN",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Manager can create user",
  "description": "",
  "id": "security-check;manager-can-create-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am a MANAGER",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I get a CREATED response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MANAGER",
      "offset": 7
    }
  ],
  "location": "SecuritySteps.I_am_a__(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#  Alternative to the previous two scenario:"
    }
  ],
  "line": 14,
  "name": "Create user access rights",
  "description": "",
  "id": "security-check;create-user-access-rights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am a \u003crole\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I get a \u003chttpStatus\u003e response",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "security-check;create-user-access-rights;",
  "rows": [
    {
      "cells": [
        "role",
        "httpStatus"
      ],
      "line": 20,
      "id": "security-check;create-user-access-rights;;1"
    },
    {
      "cells": [
        "AGENT",
        "FORBIDDEN"
      ],
      "line": 21,
      "id": "security-check;create-user-access-rights;;2"
    },
    {
      "cells": [
        "MANAGER",
        "CREATED"
      ],
      "line": 22,
      "id": "security-check;create-user-access-rights;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Create user access rights",
  "description": "",
  "id": "security-check;create-user-access-rights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am a AGENT",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I get a FORBIDDEN response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AGENT",
      "offset": 7
    }
  ],
  "location": "SecuritySteps.I_am_a__(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FORBIDDEN",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Create user access rights",
  "description": "",
  "id": "security-check;create-user-access-rights;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am a MANAGER",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I get a CREATED response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MANAGER",
      "offset": 7
    }
  ],
  "location": "SecuritySteps.I_am_a__(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("user_crud.feature");
formatter.feature({
  "line": 1,
  "name": "CRUD on users",
  "description": "",
  "id": "crud-on-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create user",
  "description": "",
  "id": "crud-on-users;create-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create a user",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I get a CREATED response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.I_create_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "Delete user",
  "description": "",
  "id": "crud-on-users;delete-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I delete the user",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get a OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_delete_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Update user",
  "description": "",
  "id": "crud-on-users;update-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I update the users\u0027s address",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I get a OK response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_update_the_users_s_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Update non existing user",
  "description": "",
  "id": "crud-on-users;update-non-existing-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "there exists a user",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I update the address of a non-existent user",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get a NOT_FOUND response",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.there_exists_a_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.I_update_the_address_of_a_non_existent_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NOT_FOUND",
      "offset": 8
    }
  ],
  "location": "CommonSteps.I_get_a__response(String)"
});
formatter.result({
  "status": "skipped"
});
});