#!/bin/bash

gatsby clean
gatsby build
aws s3 sync public s3://mojility-sitebucket-ah7f5422yc59

