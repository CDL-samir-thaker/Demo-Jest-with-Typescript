Feature: calculator

Scenario Outline: check calculator functions
    Given I have entered <input_1> into the calculator
    And I have entered <input_2> into the calculator
    When I press <button>
    Then the result should be <output> on the screen

    Examples:
    | input_1 | input_2 | button | output |
    | 20      | 30      | add    | 50     |
    | 1       | 4      | multiply| 4  |