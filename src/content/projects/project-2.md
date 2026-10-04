---
title: "Project Beta"
year: 2023
phase: "Backend Developer"
description: "Data processing pipeline designed to handle high-throughput telemetry data."
tags: ["Python", "AWS", "Data Engineering"]
---

## Overview

Project Beta focused on processing real-time telemetry data from IoT devices. We built a scalable ingestion pipeline that reliably processed millions of events per second.

### Architecture

The system leveraged **AWS Kinesis** for data ingestion, triggering **AWS Lambda** functions written in **Python** for real-time transformation. The processed data was stored in a data lake for analytics.

### Challenges Overcome
- **Scale:** Addressed bottleneck issues during traffic spikes by implementing auto-scaling policies.
- **Data Quality:** Introduced schema validation at the edge to reject malformed payloads early in the pipeline.
