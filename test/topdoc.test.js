/**
 *
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/*global require, describe, it*/

'use strict';

var grunt = require('grunt'),
    assert = require('assert'),
    fs    = require('fs'),
    debug = require('debug')('test');

describe('topdoc', function() {
    it('should create the correct output', function() {
        assert.equal(true, fs.existsSync('tmp/output/index.html'));
    });
});
