import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <ul className="flex flex-col gap-1 text-blue-500">
                <li><Link href={'/about/history'}>History</Link></li>
                <li><Link href={'/about/mission'}>Mission</Link></li>
            </ul>
        </div>
    );
};

export default AboutContents;