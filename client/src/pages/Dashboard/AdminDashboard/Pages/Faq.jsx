import React, { useState } from 'react';

function Faq() {
    const [replyText, setReplyText] = useState('');

    const data = [
        {
            teamName: 'Team A',
            email: 'teamA@example.com',
            faq: 'How do I reset my password?',
            time: '10:00 AM',
            replied: true,
            reply: 'Please follow the instructions in the password reset email.',
        },
        {
            teamName: 'Team B',
            email: 'teamB@example.com',
            faq: 'What is the deadline for submission?',
            time: '11:30 AM',
            replied: false,
            reply: '',
        },

    ];

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="text-xs text-black uppercase dark:text-gray-400 bg-blue-600">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950      uppercase tracking-wider">
                            Team Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">
                            FAQ
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">
                            Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">
                            Reply or Not
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">
                            Reply Text
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.teamName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.faq}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.replied ? 'Replied' : 'Not Replied'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input
                                    type="text"
                                    value={item.reply}
                                    onChange={(e) => {
                                        const updatedData = [...data];
                                        updatedData[index].reply = e.target.value;
                                        setData(updatedData);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Faq;
