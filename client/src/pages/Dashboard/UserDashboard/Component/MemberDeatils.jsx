import React from 'react';

function MemberDeatils() {
    const MemberDeatls = [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        }
    ];

    return (
        <div className='w-2/4 h-full'>
            <div className='grid grid-cols-2 gap-x-50 h-fix'>
                <div>
                    Name
                </div>
                <div>
                    Email
                </div>

            </div>

            {MemberDeatls.map((member, index) => (
                <div key={index} className='grid grid-cols-2 justify h-6 gap-x-50 text-white'>
                    <div>
                        {member.name}
                    </div>
                    <div>
                        {member.email}
                    </div>
                    <div>
                        {member.phone}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MemberDeatils;
