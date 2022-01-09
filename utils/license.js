const licenses = [
    {
        name: 'Apache 2.0 License',
        image: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        link: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        name: 'Boost Software License 1.0',
        image: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        link: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    },
    {
        name: 'BSD 3-Clause License',
        image: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        link: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        name: 'BSD 2-Clause License',
        image: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        link: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
        name: 'Creative Commons CC0',
        image: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
        link: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)0'
    },
    {
        name: 'Creative Commons Attribution 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
        link: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
    },
    {
        name: 'Creative Commons Attribution-ShareAlike 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
        link: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'
    },
    {
        name: 'Creative Commons Attribution-NonCommercial 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg',
        link: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)'
    },
    {
        name: 'Creative Commons Attribution-NoDerivates 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg',
        link: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)'
    },
    {
        name: 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg',
        link: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'
    },
    {
        name: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg',
        link: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'
    },
    {
        name: 'Eclipse Public License 1.0',
        image: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        link: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    },
    {
        name: 'GNU GPL v3',
        image: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        link: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        name: 'GNU GPL v2',
        image: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
        link: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    },
    {
        name: 'GNU AGPL v3',
        image: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
        link: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    },
    {
        name: 'GNU LGPL v3',
        image: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    },
    {
        name: 'GNU FDL v1.3',
        image: 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg',
        link: '![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'
    },
    {
        name: 'Hippocratic License 2.1',
        image: 'https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg',
        link: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'
    },
    {
        name: 'Hippocratic License 3.0',
        image: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
        link: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'
    },
    {
        name: 'IBM Public License Version 1.0',
        image: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
        link: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    },
    {
        name: 'ISC License',
        image: 'https://img.shields.io/badge/License-ISC-blue.svg',
        link: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    },
    {
        name: 'MIT License',
        image: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        name: 'Mozilla Public License 2.0',
        image: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        link: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        name: 'Open Data Commons Attribution License',
        image: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
        link: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
    },
    {
        name: 'Open Data Commons Open Database License',
        image: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
        link: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
    },
    {
        name: 'Open Data Commons Public Domain Dedication and License',
        image: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
        link: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
    },
    {
        name: 'Perl License',
        image: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
        link: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
    },
    {
        name: 'Perl Artistic License 2.0',
        image: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
        link: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
    },
    {
        name: 'SIL Open Font License 1.1',
        image: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
        link: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
    },
    {
        name: 'The Unlicense',
        image: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        link: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    },
    {
        name: 'WTFPL',
        image: 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
        link: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
    },
    {
        name: 'zlib/libpng License',
        image: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
        link: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    }
];

module.exports = licenses;