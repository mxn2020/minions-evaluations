/**
 * @module @minions-evaluations/sdk/schemas
 * Custom MinionType schemas for Minions Evaluations.
 */

import type { MinionType } from 'minions-sdk';

export const testcaseType: MinionType = {
  id: 'evaluations-test-case',
  name: 'Test case',
  slug: 'test-case',
  description: 'A defined input and expected output for evaluating an agent or prompt.',
  icon: '🧪',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'agentId', type: 'string', label: 'agentId' },
    { name: 'skillId', type: 'string', label: 'skillId' },
    { name: 'promptVersionRef', type: 'string', label: 'promptVersionRef' },
    { name: 'inputs', type: 'string', label: 'inputs' },
    { name: 'expectedOutputs', type: 'string', label: 'expectedOutputs' },
    { name: 'rubric', type: 'string', label: 'rubric' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const testrunType: MinionType = {
  id: 'evaluations-test-run',
  name: 'Test run',
  slug: 'test-run',
  description: 'A recorded execution of a test case with pass/fail and score.',
  icon: '📋',
  schema: [
    { name: 'testCaseId', type: 'string', label: 'testCaseId' },
    { name: 'agentRunId', type: 'string', label: 'agentRunId' },
    { name: 'passed', type: 'boolean', label: 'passed' },
    { name: 'score', type: 'number', label: 'score' },
    { name: 'actualOutput', type: 'string', label: 'actualOutput' },
    { name: 'evaluatorNotes', type: 'string', label: 'evaluatorNotes' },
    { name: 'ranAt', type: 'string', label: 'ranAt' },
  ],
};

export const benchmarkType: MinionType = {
  id: 'evaluations-benchmark',
  name: 'Benchmark',
  slug: 'benchmark',
  description: 'A grouped set of test cases measuring a specific capability dimension.',
  icon: '📏',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'testCaseIds', type: 'string', label: 'testCaseIds' },
    { name: 'dimension', type: 'string', label: 'dimension' },
    { name: 'passingThreshold', type: 'number', label: 'passingThreshold' },
    { name: 'lastRunAt', type: 'string', label: 'lastRunAt' },
    { name: 'lastScore', type: 'number', label: 'lastScore' },
  ],
};

export const evalmetricType: MinionType = {
  id: 'evaluations-eval-metric',
  name: 'Eval metric',
  slug: 'eval-metric',
  description: 'A single measured quality dimension from an evaluation run.',
  icon: '📐',
  schema: [
    { name: 'testRunId', type: 'string', label: 'testRunId' },
    { name: 'dimension', type: 'string', label: 'dimension' },
    { name: 'score', type: 'number', label: 'score' },
    { name: 'maxScore', type: 'number', label: 'maxScore' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const customTypes: MinionType[] = [
  testcaseType,
  testrunType,
  benchmarkType,
  evalmetricType,
];

