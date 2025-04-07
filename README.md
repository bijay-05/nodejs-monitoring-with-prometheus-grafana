# nodejs-monitoring-with-prometheus-grafana
This repository contains documentation and code for setting up monitoring of NodeJS application with Prometheus and Grafana.

## Introduction
We will learn about monitoring different metrics by instrumenting **NodeJS** application code. We will use **Prometheus** for storing metrics and **Grafana** to visualise those metrics.

We will create a simple **ExpressJS** server and expose few metrics at `/metrics` endpoint so that **Prometheus** can scrape those metrics and store in its time series database. Finally, we will visualise those metrics in **Grafana** dashboard.
