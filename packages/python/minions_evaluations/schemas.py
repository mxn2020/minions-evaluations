"""
Minions Evaluations SDK — Type Schemas
Custom MinionType schemas for Minions Evaluations.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_case_type = MinionType(
    id="evaluations-test-case",
    name="Test case",
    slug="test-case",
    description="A defined input and expected output for evaluating an agent or prompt.",
    icon="🧪",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="agentId", type="string", label="agentId"),
        FieldDefinition(name="skillId", type="string", label="skillId"),
        FieldDefinition(name="promptVersionRef", type="string", label="promptVersionRef"),
        FieldDefinition(name="inputs", type="string", label="inputs"),
        FieldDefinition(name="expectedOutputs", type="string", label="expectedOutputs"),
        FieldDefinition(name="rubric", type="string", label="rubric"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

test_run_type = MinionType(
    id="evaluations-test-run",
    name="Test run",
    slug="test-run",
    description="A recorded execution of a test case with pass/fail and score.",
    icon="📋",
    schema=[
        FieldDefinition(name="testCaseId", type="string", label="testCaseId"),
        FieldDefinition(name="agentRunId", type="string", label="agentRunId"),
        FieldDefinition(name="passed", type="boolean", label="passed"),
        FieldDefinition(name="score", type="number", label="score"),
        FieldDefinition(name="actualOutput", type="string", label="actualOutput"),
        FieldDefinition(name="evaluatorNotes", type="string", label="evaluatorNotes"),
        FieldDefinition(name="ranAt", type="string", label="ranAt"),
    ],
)

benchmark_type = MinionType(
    id="evaluations-benchmark",
    name="Benchmark",
    slug="benchmark",
    description="A grouped set of test cases measuring a specific capability dimension.",
    icon="📏",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="testCaseIds", type="string", label="testCaseIds"),
        FieldDefinition(name="dimension", type="string", label="dimension"),
        FieldDefinition(name="passingThreshold", type="number", label="passingThreshold"),
        FieldDefinition(name="lastRunAt", type="string", label="lastRunAt"),
        FieldDefinition(name="lastScore", type="number", label="lastScore"),
    ],
)

eval_metric_type = MinionType(
    id="evaluations-eval-metric",
    name="Eval metric",
    slug="eval-metric",
    description="A single measured quality dimension from an evaluation run.",
    icon="📐",
    schema=[
        FieldDefinition(name="testRunId", type="string", label="testRunId"),
        FieldDefinition(name="dimension", type="string", label="dimension"),
        FieldDefinition(name="score", type="number", label="score"),
        FieldDefinition(name="maxScore", type="number", label="maxScore"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

custom_types: list[MinionType] = [
    test_case_type,
    test_run_type,
    benchmark_type,
    eval_metric_type,
]

