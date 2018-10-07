#!/usr/bin/env bash
docker image build -t performance-bench .
docker run -p 3000:443 --rm performance-bench