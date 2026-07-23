export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    phone: string;
    mobile?: string;
    location: string;
    website?: string;
    sector?: string;
    businessType?: string;
    source: string;
    tags?: string;
    notes?: string;
    latitude?: number;
    longitude?: number;
    createdAt: string;
}

export const contacts: Contact[] = [
    {
        firstName: 'Marcus', lastName: 'Holloway',
        email: 'marcus.h@westpointeng.com',
        company: 'Westpoint Engineering',
        jobTitle: 'Senior Estimator',
        phone: '+1 (604) 312-8847', location: '—',
        source: 'OUTLOOK',
        latitude: 53.5461, longitude: -113.4938,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Priya', lastName: 'Kavanaugh',
        email: 'priya.k@clearwaterind.com',
        company: 'Clearwater Industries',
        jobTitle: 'Project Manager',
        phone: '+1 (778) 509-3321', location: '—',
        source: 'OUTLOOK',
        latitude: 49.2827, longitude: -123.1207,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Elena', lastName: 'Driscoll',
        email: 'elena.d@summitgroupco.com',
        company: 'Summit Group Companies',
        jobTitle: 'Estimating Manager',
        phone: '+1 (250) 614-9982', location: '—',
        source: 'OUTLOOK',
        latitude: 48.4284, longitude: -123.3656,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Owen', lastName: 'Beckett',
        email: 'owen.b@arclightmech.com',
        company: 'Arclight Mechanical',
        jobTitle: 'Operations Lead',
        phone: '+1 (416) 773-2201', location: '—',
        source: 'OUTLOOK',
        latitude: 45.5017, longitude: -73.5673,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Nadia', lastName: 'Weston',
        email: 'nadia.w@ironbridgefab.com',
        company: 'Iron Bridge Fabrication',
        jobTitle: 'Quality Manager',
        phone: '+1 (250) 487-6613', location: '—',
        source: 'OUTLOOK',
        latitude: 48.4284, longitude: -123.3656,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Liam', lastName: 'Ashford',
        email: 'liam.a@cedarstonedev.com',
        company: 'Cedarstone Developments',
        jobTitle: 'CFO',
        phone: '+1 (604) 883-4156', location: '—',
        source: 'OUTLOOK',
        latitude: 48.7767, longitude: -123.7058,
        createdAt: new Date(Date.now() - 23 * 3600000).toISOString()
    },
    {
        firstName: 'Tessa', lastName: 'Langford',
        email: 'tessa.l@northshoreroof.com',
        company: 'North Shore Roofing Co',
        jobTitle: 'Director',
        phone: '+1 (250) 671-3390', location: '—',
        source: 'OUTLOOK',
        latitude: 49.1666, longitude: -123.9401,
        createdAt: new Date(Date.now() - 23 * 3600000).toISOString()
    },
    {
        firstName: 'Derek', lastName: 'Malone',
        email: 'derek.m@horizonbuild.com',
        company: 'Horizon Builders',
        jobTitle: 'Preconstruction Manager',
        phone: '+1 (604) 442-8871', location: '—',
        source: 'OUTLOOK',
        latitude: 49.1044, longitude: -122.6609,
        createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
    },
    {
        firstName: 'Rachel', lastName: 'Thornton',
        email: 'rachel.t@bayviewconst.com',
        company: 'Bayview Construction',
        jobTitle: 'Contracts Manager',
        phone: '+1 (250) 519-7742', location: '—',
        source: 'OUTLOOK',
        latitude: 48.7438, longitude: -123.7088,
        createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
    },
    {
        firstName: 'Victor', lastName: 'Sandoval',
        email: 'victor.s@ridgelineltd.com',
        company: 'Ridgeline Limited',
        jobTitle: 'Preconstruction Manager',
        phone: '+1 (250) 603-1198', location: '—',
        source: 'OUTLOOK',
        latitude: 48.8612, longitude: -123.6523,
        createdAt: new Date(Date.now() - 25 * 3600000).toISOString()
    },
    {
        firstName: 'Sophie', lastName: 'Callahan',
        email: 'sophie.c@ridgelineltd.com',
        company: 'Ridgeline Limited',
        jobTitle: 'Project Manager',
        phone: '+1 (604) 288-5541', location: '—',
        source: 'OUTLOOK',
        latitude: 49.2488, longitude: -122.9805,
        createdAt: new Date(Date.now() - 25 * 3600000).toISOString()
    },
    {
        firstName: 'Marco', lastName: 'Reeves',
        email: 'marco.r@sentinelfire.com',
        company: 'Sentinel Fire Protection',
        jobTitle: 'Representative',
        phone: '+1 (604) 791-3364', location: '—',
        source: 'OUTLOOK',
        latitude: 49.2270, longitude: -123.0032,
        createdAt: new Date(Date.now() - 26 * 3600000).toISOString()
    },
    // Additional contacts for map clusters
    {
        firstName: 'Aisha', lastName: 'Brennan',
        email: 'aisha.b@westvalleyeng.com',
        company: 'West Valley Engineering',
        jobTitle: 'Engineer',
        phone: '+1 (415) 209-4418', location: 'San Francisco, CA',
        source: 'OUTLOOK',
        latitude: 37.7749, longitude: -122.4194,
        createdAt: new Date(Date.now() - 48 * 3600000).toISOString()
    },
    {
        firstName: 'Nathan', lastName: 'Whitmore',
        email: 'nathan.w@novatech.com',
        company: 'NovaTech Solutions',
        jobTitle: 'VP Engineering',
        phone: '+1 (512) 334-7720', location: 'Austin, TX',
        source: 'OUTLOOK',
        latitude: 30.2672, longitude: -97.7431,
        createdAt: new Date(Date.now() - 72 * 3600000).toISOString()
    },
    {
        firstName: 'Carmen', lastName: 'Ellison',
        email: 'carmen.e@blueshoredev.com',
        company: 'Blueshore Developments',
        jobTitle: 'Operations Manager',
        phone: '+1 (305) 621-8803', location: 'Miami, FL',
        source: 'OUTLOOK',
        latitude: 25.7617, longitude: -80.1918,
        createdAt: new Date(Date.now() - 96 * 3600000).toISOString()
    },
    {
        firstName: 'Ian', lastName: 'Mercer',
        email: 'ian.m@pacificedge.ca',
        company: 'Pacific Edge Projects',
        jobTitle: 'Site Manager',
        phone: '+1 (604) 553-1192', location: 'Vancouver, BC',
        source: 'OUTLOOK',
        latitude: 49.2827, longitude: -123.1207,
        createdAt: new Date(Date.now() - 120 * 3600000).toISOString()
    },
    {
        firstName: 'Julia', lastName: 'Pearce',
        email: 'julia.p@northstarbc.ca',
        company: 'Northstar Building Co',
        jobTitle: 'Estimator',
        phone: '+1 (604) 417-6638', location: 'Surrey, BC',
        source: 'OUTLOOK',
        latitude: 49.1913, longitude: -122.8490,
        createdAt: new Date(Date.now() - 144 * 3600000).toISOString()
    },
    {
        firstName: 'Raj', lastName: 'Kensington',
        email: 'raj.k@coastalpower.ca',
        company: 'Coastal Power Electric',
        jobTitle: 'Electrician',
        phone: '+1 (604) 209-3314', location: 'Burnaby, BC',
        source: 'OUTLOOK',
        latitude: 49.2488, longitude: -122.9805,
        createdAt: new Date(Date.now() - 168 * 3600000).toISOString()
    },
    {
        firstName: 'Megan', lastName: 'Harwood',
        email: 'megan.h@islandsurfacing.ca',
        company: 'Island Surfacing Inc',
        jobTitle: 'Admin Manager',
        phone: '+1 (250) 331-8807', location: 'Nanaimo, BC',
        source: 'OUTLOOK',
        latitude: 49.1659, longitude: -123.9401,
        createdAt: new Date(Date.now() - 192 * 3600000).toISOString()
    },
    {
        firstName: 'Connor', lastName: 'Blackwell',
        email: 'connor.b@solidgroundca.com',
        company: 'Solid Ground Concrete',
        jobTitle: 'Foreman',
        phone: '+1 (604) 882-4419', location: 'Langley, BC',
        source: 'OUTLOOK',
        latitude: 49.1044, longitude: -122.6609,
        createdAt: new Date(Date.now() - 216 * 3600000).toISOString()
    },
    // More contacts to hit 61 total — bulk generated
    ...Array.from({ length: 41 }, (_, i) => ({
        firstName: ['Alex', 'Chris', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Drew', 'Blake', 'Quinn',
            'Avery', 'Cameron', 'Dakota', 'Emery', 'Finley', 'Harper', 'Hayden', 'Jamie', 'Jesse', 'Kelly',
            'Lane', 'Logan', 'Marley', 'Nico', 'Oakley', 'Parker', 'Peyton', 'Reese', 'Rowan', 'Sage',
            'Sawyer', 'Skyler', 'Spencer', 'Sydney', 'Tatum', 'Toby', 'Val', 'Wesley', 'Wren', 'Zion', 'Ash'][i],
        lastName: ['Merritt', 'Colton', 'Vega', 'Stirling', 'Prescott', 'Henley', 'Wakefield', 'Carver', 'Donovan', 'Pemberton',
            'Aldridge', 'Fairfax', 'Stratton', 'Lockwood', 'Ramsey', 'Whitfield', 'Clayborne', 'Everett', 'Hargrove', 'Sinclair',
            'Dalton', 'Ashworth', 'Beaumont', 'Hartley', 'Ellsworth', 'Bancroft', 'Trenton', 'Courtland', 'Marsden', 'Sutherland',
            'Halstead', 'Blackmore', 'Castleton', 'Waverly', 'Montrose', 'Kingsley', 'Landon', 'Crawford', 'Pembroke', 'Thornfield', 'Redmond'][i],
        email: `${['alex', 'chris', 'jordan', 'taylor', 'morgan', 'casey', 'riley', 'drew', 'blake', 'quinn',
            'avery', 'cameron', 'dakota', 'emery', 'finley', 'harper', 'hayden', 'jamie', 'jesse', 'kelly',
            'lane', 'logan', 'marley', 'nico', 'oakley', 'parker', 'peyton', 'reese', 'rowan', 'sage',
            'sawyer', 'skyler', 'spencer', 'sydney', 'tatum', 'toby', 'val', 'wesley', 'wren', 'zion', 'ash'][i]}@${['crestline', 'crestline', 'crestline', 'crestline', 'crestline', 'edgemont', 'edgemont', 'silverlake', 'silverlake', 'grandview',
                'fieldstone', 'stonebridge', 'arrowhead', 'ridgepoint', 'clearwater', 'highline', 'trailmark', 'vertex',
                'cascade', 'alpine', 'skyward', 'matrix', 'pinnacle', 'nova', 'atlas', 'forge', 'keystone',
                'sterling', 'patriot', 'vanguard', 'titan', 'apex', 'nexus', 'prism', 'crown', 'delta',
                'echo', 'falcon', 'griffin', 'harbor', 'ironworks'][i]}.com`,
        company: ['Crestline', 'Crestline', 'Crestline', 'Crestline', 'Crestline', 'Edgemont', 'Edgemont', 'Silverlake', 'Silverlake', 'Grandview',
            'Fieldstone', 'Stonebridge', 'Arrowhead', 'Ridgepoint', 'Clearwater', 'Highline', 'Trailmark', 'Vertex',
            'Cascade', 'Alpine', 'Skyward', 'Matrix', 'Pinnacle', 'Nova', 'Atlas', 'Forge', 'Keystone',
            'Sterling', 'Patriot', 'Vanguard', 'Titan', 'Apex', 'Nexus', 'Prism', 'Crown', 'Delta',
            'Echo', 'Falcon', 'Griffin', 'Harbor', 'Ironworks'][i],
        jobTitle: ['Project Manager', 'Project Manager', 'Project Manager', 'Estimator', 'Estimator',
            'Project Manager', 'Superintendent', 'Estimator', 'Project Manager', 'Project Manager',
            'Coordinator', 'Engineer', 'Designer', 'Foreman', 'Inspector', 'Planner', 'Analyst',
            'Director', 'Manager', 'Supervisor', 'Consultant', 'Advisor', 'Specialist', 'Lead',
            'Coordinator', 'Technician', 'Operator', 'Assistant', 'Associate', 'Senior PM',
            'VP Operations', 'Site Lead', 'QC Manager', 'Safety Officer', 'Scheduler', 'Procurement',
            'Contracts', 'BIM Lead', 'Surveyor', 'Drafter', 'Laborer'][i],
        phone: `+1 (${600 + i}) 555-${String(1000 + i).slice(-4)}`,
        location: '—',
        source: 'OUTLOOK',
        latitude: 49.2 + (Math.random() - 0.5) * 2,
        longitude: -123.1 + (Math.random() - 0.5) * 2,
        createdAt: new Date(Date.now() - (240 + i * 24) * 3600000).toISOString()
    }))
];

export function getTopCompany(): string {
    const freq: Record<string, number> = {};
    contacts.forEach(c => { freq[c.company] = (freq[c.company] || 0) + 1; });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
}

export function getTopRole(): string {
    const freq: Record<string, number> = {};
    contacts.forEach(c => {
        if (c.jobTitle && c.jobTitle !== '—') freq[c.jobTitle] = (freq[c.jobTitle] || 0) + 1;
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
}

export function getTimeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return 'just now';
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
}

export function getInitials(c: Contact): string {
    return ((c.firstName?.[0] || '') + (c.lastName?.[0] || '')).toUpperCase();
}

const AVATAR_COLORS = [
    '#4ade80', '#f472b6', '#60a5fa', '#fbbf24', '#a78bfa',
    '#34d399', '#fb923c', '#818cf8', '#f87171', '#2dd4bf'
];

export function getAvatarColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
