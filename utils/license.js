const licenses = [
    {
        licenseName: 'Apache 2.0 License',
        image: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
        licenseName: 'Boost Software License 1.0',
        image: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        link: 'https://www.boost.org/LICENSE_1_0.txt'
    },
    {
        licenseName: 'BSD 3-Clause License',
        image: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
        licenseName: 'BSD 2-Clause License',
        image: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        link: 'https://opensource.org/licenses/BSD-2-Clause'
    },
    {
        licenseName: 'Creative Commons CC0',
        image: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
        badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
        link: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },
    {
        licenseName: 'Creative Commons Attribution 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
        badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
        link: 'https://creativecommons.org/licenses/by/4.0/'
    },
    {
        licenseName: 'Creative Commons Attribution-ShareAlike 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
        badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
        link: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    {
        licenseName: 'Creative Commons Attribution-NonCommercial 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg',
        badge: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)',
        link: 'https://creativecommons.org/licenses/by-nc/4.0/'
    },
    {
        licenseName: 'Creative Commons Attribution-NoDerivates 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg',
        badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)',
        link: 'https://creativecommons.org/licenses/by-nd/4.0/'
    },
    {
        licenseName: 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg',
        badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)',
        link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
    },
    {
        licenseName: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
        image: 'https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg',
        badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)',
        link: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'
    },
    {
        licenseName: 'Eclipse Public License 1.0',
        image: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        link: 'https://opensource.org/licenses/EPL-1.0'
    },
    {
        licenseName: 'GNU GPL v3',
        image: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        licenseName: 'GNU GPL v2',
        image: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
        badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
        link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    },
    {
        licenseName: 'GNU AGPL v3',
        image: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
        badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        link: 'https://www.gnu.org/licenses/agpl-3.0'
    },
    {
        licenseName: 'GNU LGPL v3',
        image: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        badge: '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        link: 'https://www.gnu.org/licenses/lgpl-3.0'
    },
    {
        licenseName: 'GNU FDL v1.3',
        image: 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg',
        badge: '![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)',
        link: 'https://www.gnu.org/licenses/fdl-1.3'
    },
    {
        licenseName: 'Hippocratic License 2.1',
        image: 'https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg',
        badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
        link: 'https://firstdonoharm.dev'
    },
    {
        licenseName: 'Hippocratic License 3.0',
        image: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
        badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
        link: 'https://firstdonoharm.dev'
    },
    {
        licenseName: 'IBM Public License Version 1.0',
        image: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
        badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
        link: 'https://opensource.org/licenses/IPL-1.0'
    },
    {
        licenseName: 'ISC License',
        image: 'https://img.shields.io/badge/License-ISC-blue.svg',
        badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        link: 'https://opensource.org/licenses/ISC'
    },
    {
        licenseName: 'MIT License',
        image: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        licenseName: 'Mozilla Public License 2.0',
        image: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        link: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
        licenseName: 'Open Data Commons Attribution License',
        image: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
        badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
        link: 'https://opendatacommons.org/licenses/by/'
    },
    {
        licenseName: 'Open Data Commons Open Database License',
        image: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
        badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
        link: 'https://opendatacommons.org/licenses/odbl/'
    },
    {
        licenseName: 'Open Data Commons Public Domain Dedication and License',
        image: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
        badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
        link: 'https://opendatacommons.org/licenses/pddl/'
    },
    {
        licenseName: 'Perl License',
        image: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
        badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
        link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    {
        licenseName: 'Perl Artistic License 2.0',
        image: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
        badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
        link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    {
        licenseName: 'SIL Open Font License 1.1',
        image: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
        badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
        link: 'https://opensource.org/licenses/OFL-1.1'
    },
    {
        licenseName: 'The Unlicense',
        image: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        link: 'http://unlicense.org/'
    },
    {
        licenseName: 'WTFPL',
        image: 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
        badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        link: 'http://www.wtfpl.net/about/'
    },
    {
        licenseName: 'zlib/libpng License',
        image: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
        badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
        link: 'https://opensource.org/licenses/Zlib'
    }
];

module.exports = licenses;