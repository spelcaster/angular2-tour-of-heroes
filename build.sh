#!/bin/bash

rm -rfv dist/* js/*
tsc
gulp default
lite-server
