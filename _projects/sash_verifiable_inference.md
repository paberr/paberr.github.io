---
layout: page
title: Verifiable AI Inference
description: Open-source zero-knowledge prover for LLM inference, making international AI agreements verifiable. At the Singapore AI Safety Hub (SASH).
importance: 1
category: current
---

**Problem.** International AI agreements, such as limits on what compute is used for, are only as strong as our ability to check them. Verifying what a datacenter actually computed today requires access to model weights and other secrets that no party is willing to share.

**Approach.** We build an open-source prover that produces zero-knowledge proofs of LLM inference, from the prompt through every layer to the generated tokens. This lets a verifier check that approved inference was run without seeing the model.

**Results.** Our first measurements prove inference of a quantised Llama-3.1 8B (4,096-token prompt, 512-token answer) in roughly 1–1.5 hours on a single H100, with verification taking about two minutes.

Read more: [_Towards Proving Frontier-Scale LLM Inference_](https://www.aisafety.sg/research/what-proving-llm-inference-actually-costs-research-note) and [_The Math Behind Pacing the Frontier_](https://www.aisafety.sg/blog/zkp-intro).
