# Single Flight — Visual Demo

This demo is a **visual companion** to the article [*Designing Single Flight for the Thundering Herd Problem*](#).

Open your browser's DevTools, head to the **Network** tab, and watch how many requests fire on each route — that's where the difference becomes tangible.

## Routes

| Route | Description |
|---|---|
| `/thundering-herd-problem` | Two independent fetches for the same resource |
| `/single-flight` | Both callers share a single in-flight request |

## ⚠️ This is not copy-paste code

The implementation shown here is a **simplified, self-contained equivalent** of the problem and its solution. Its only purpose is to make the behavior visible in the browser.

How you apply this pattern in a real application depends entirely on your context:

- You might introduce it via **dependency injection** and **inversion of control**, so modules never instantiate the registry themselves
- You might wrap it behind a **bridge or adapter** if your data-fetching layer is abstracted
- You might colocate it inside a **service layer** or a **shared infrastructure module**

There is no single right answer. The pattern is the idea — the wiring is yours to decide.