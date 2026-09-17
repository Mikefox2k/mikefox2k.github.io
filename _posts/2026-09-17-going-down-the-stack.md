---
layout: post
title: "Going Down the Stack: Why a Full-Stack Dev is Learning Low-Level Engineering"
date: 2026-09-17 10:00:00 +0200
categories: [meta]
tags: [introduction]
---

For years, my world has been defined by high-level abstractions: V8 engines, garbage collection, REST APIs, modern frontend frameworks—and CSS, of course. (The latter is a total pain.) You write code, the runtime engine handles the memory, and the browser renders the result. It works—until you start wondering what actually happens under the hood.

I've always questioned how things work behind the scenes and had a rough idea, but I could never explain it cleanly. As Albert Einstein (supposedly) said: "If you can't explain it simply, you don’t understand it well enough."

Although I completed a formal vocational degree in application development (*Fachinformatiker für Anwendungsentwicklung*), most of what I use daily as a full-stack engineer is self-taught. I love picking up new tools, but relying solely on managed environments has left a blind spot in my understanding of modern software architecture.

### Why Go Low-Level Now?

- **Understanding the core tool:** Starting at the foundation—learning how the computer itself actually operates beneath our abstractions.
- **Understanding Memory Management:** Moving away from automatic garbage collection to manually managing allocation on the Stack and Heap.
- **Performance & Hardware:** Grasping CPU cache lines, pointer arithmetic, and how high-level code is compiled into machine instructions.
- **Better Architectural Decisions:** Knowing how system resources work behind the scenes makes you write better high-level code.

### The Roadmap

I'm starting from the ground up—though this order is strictly "without warranty" and might shift as I run into unexpected rabbit holes:

1. **C Fundamentals:** Pointers, memory allocation (`malloc`/`free`), and bitwise operations.
2. **System Calls & Assembly:** Understanding the boundary between user space and the operating system kernel.
3. **Rust or Zig:** Exploring modern systems programming with compile-time safety memory models.

### What to Expect From This Blog

This is not a space for polished, expert-level tutorials. Instead, expect:

- Raw notes and mental models as I learn.
- Breakdowns of deep-dive rabbit holes and debugging sessions.
- Mental breakdowns as well

If you're also a web developer looking to understand what happens and why it happens, follow along!