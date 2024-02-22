import React, { useState } from 'react';

function TeamDetails() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const Team_Details = [
        {
            teamName: 'Team 1', email: 'team1@example.com', numOfMembers: 5, members: [
                { name: 'Member 1', email: 'member1@example.com' },
                { name: 'Member 2', email: 'member2@example.com' },
                { name: 'Member 3', email: 'member3@example.com' }
            ]
        },
        {
            teamName: 'Team 2', email: 'team2@example.com', numOfMembers: 3, members: [
                { name: 'Member 4', email: 'member4@example.com' },
                { name: 'Member 5', email: 'member5@example.com' }
            ]
        },
        {
            teamName: 'Team 3', email: 'team3@example.com', numOfMembers: 7, members: [
                { name: 'Member 6', email: 'member6@example.com' },
                { name: 'Member 7', email: 'member7@example.com' },
                { name: 'Member 8', email: 'member8@example.com' },
                { name: 'Member 9', email: 'member9@example.com' }
            ]
        },
    ];

    const showMemberDetails = (teamName) => {
        const team = Team_Details.find(team => team.teamName === teamName);
        setSelectedTeam(team);
    };

    const closePopup = () => {
        setSelectedTeam(null);
    };

    return (
        <div className="ml-0 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase dark:text-gray-400 bg-blue-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <button className="text-white">Team Name</button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button className="text-white">Email</button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button className="text-white">No. of Members</button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button className="text-white">Actions</button>
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-blue-950'>
                    {Team_Details.map((team, index) => (
                        <tr key={index}>
                            <td className="px-6 py-3 cursor-pointer" onClick={() => showMemberDetails(team.teamName)}>{team.teamName}</td>
                            <td className="px-6 py-3">{team.email}</td>
                            <td className="px-6 py-3">{team.numOfMembers}</td>
                            <td className="px-6 py-3">
                                <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Popup */}
            {selectedTeam && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded p-8 w-2/4">
                        <h2 className="text-xl font-bold mb-4">{selectedTeam.teamName} Members</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Email</th>
                                </tr>
                            </thead>
                            <tbody >
                                {selectedTeam.members.map((member, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-3">{member.name}</td>
                                        <td>{member.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeamDetails;
