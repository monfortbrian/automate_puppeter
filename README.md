# Puppeteer Automation Experiments

This repository explores practical automation possibilities using **Puppeteer (Node.js)**, 
with a focus on real-world data workflows rather than UI testing alone.

## Background

I’ve used Puppeteer in the past for lightweight automation tasks. Recently, I revisited it in 
the context of a **client automation pipeline for a QMS (Queue Management System)**, where 
reliability and unattended execution were critical.

## Use Case: QMS Data Automation

The client required a fully automated data pipeline built around QMS exports, consisting of:

### 1. Extraction & Cleaning Pipeline at 8:00 PM GMT+2
- Source: QMS data exports
- Process:
  - Extract raw files
  - Clean and normalize inconsistent formats
  - Transform `raw_data` → `ready_data`
- Output: Structured, analysis-ready datasets

### 2. Distribution Pipeline at 3:00 AM GMT
- Secure file transfer from **one SFTP to another SFTP**
- Automated scheduling and delivery
- Zero manual intervention once stabilized

## Challenge Encountered

The QMS system was configured to automatically push data to an FTP server every day at 
**7:00 PM (GMT+2)** in CSV format. 
However:
- Files were often **corrupted or mixed**
- No column headers
- Inconsistent structure
- Not suitable for automated downstream processing

As a temporary workaround, the client assigned an IT personnel to:
- Manually download the files daily
- Transfer them using SCP:
  ```bash
  scp *.xls kiosk_ftp@xxx:/home/kiosk_ftp/raw_data/
