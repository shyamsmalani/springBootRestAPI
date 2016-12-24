Feature: Security check

  Scenario: Customer cannot create user
    Given I am a AGENT
    When I create a user
    Then I get a FORBIDDEN response

  Scenario: Manager can create user
    Given I am a MANAGER
    When I create a user
    Then I get a CREATED response

#  Alternative to the previous two scenario:
  Scenario Outline: Create user access rights
    Given I am a <role>
    When I create a user
    Then I get a <httpStatus> response

    Examples:
      | role    | httpStatus |
      | AGENT   | FORBIDDEN  |
      | MANAGER | CREATED    |



