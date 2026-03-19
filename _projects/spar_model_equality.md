---
layout: page
title: "Proving Model Equality in Zero-Knowledge"
description: "SPAR Spring 2026: Using ZKPs and challenge-response protocols to prove a deployed model matches a reference without revealing weights."
importance: 6
---

**Problem.** When an AI model is deployed as a service, users have no guarantee that the model they interact with is the same one that was audited or certified. Model providers could swap in a cheaper or modified model without detection.

**Approach.** We develop zero-knowledge proof systems and challenge-response protocols that allow a model operator to prove that the deployed model matches a reference model — without revealing the model weights to the verifier.

A [SPAR](https://sparai.org) Spring 2026 mentorship project.
