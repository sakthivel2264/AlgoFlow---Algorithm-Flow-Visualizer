

export const sampleFile = `├── Iteration 4: i = 3
│   │   current i = 3
│   │   l = 3
│   │   r = 3
│   │   Variable States: start = 0, maxLen = 3, l = 3, r = 3
│   │
│   ├── Expand from center: while l >= 0 and r < n and s[l] == s[r]
│   │   │   Condition: l >= 0 (3 >= 0) is true AND r < n (3 < 5) is true AND s[l] == s[r] (s[3] == s[3] ('a' == 'a')) is true
│   │   │   Decision: Expand
│   │   │   Variable States: start = 0, maxLen = 3, l = 3, r = 3
│   │   │   l = l - 1 (2)
│   │   │   r = r + 1 (4)
│   │   │   Variable States: start = 0, maxLen = 3, l = 2, r = 4
│   │   │
│   │   └── While condition check
│   │       │   Condition: l >= 0 (2 >= 0) is true AND r < n (4 < 5) is true AND s[l] == s[r] (s[2] == s[4] ('b' == 'd')) is false
│   │       │   Decision: Stop expansion
│   │       │   Variable States: start = 0, maxLen = 3, l = 2, r = 4
│   │       │
│   │       └── Check maxLen update
│   │           │   currentLen = r - l - 1 = 4 - 2 - 1 = 1
│   │           │   Condition: currentLen > maxLen (1 > 3) is false
│   │           │   Decision: No update
│   │
│   └── Expand from center: while l >= 0 and r < n and s[l] == s[r]
│       │   l = 3
│       │   r = 4
│       │   Variable States: start = 0, maxLen = 3, l = 3, r = 4
│       │
│       ├── Expand from center: while l >= 0 and r < n and s[l] == s[r]
│       │   │   Condition: l >= 0 (3 >= 0) is true AND r < n (4 < 5) is true AND s[l] == s[r] (s[3] == s[4] ('a' == 'd')) is false
│       │   │   Decision: Stop expansion
│       │   │   Variable States: start = 0, maxLen = 3, l = 3, r = 4
│       │   │
│       │   └── While condition check
│       │       │   Condition: l >= 0 (3 >= 0) is true AND r < n (4 < 5) is true AND s[l] == s[r] ('a' == 'd') is false. Loop terminates
│       │       │
│       │       └── Check maxLen update
│           │   currentLen = r - l - 1 = 4 - 3 - 1 = 0
│           │   Condition: currentLen > maxLen (0 > 3) is false
│           │   Decision: No update
│`
