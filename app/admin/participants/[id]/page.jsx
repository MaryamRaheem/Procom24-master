'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { Table, TableBody, TableCell, TableRow,TableHead, TableHeader } from '@/components/ui/table'
const ParticipantDetails = () => {
    const { id } = useParams()
    const [participant, setParticipant] = useState({})
    useEffect(() => {
        const fetchParticipant = async () => {
            const res = await axios.get(`/api/participants/${id}`)
            console.log('res', res)
            setParticipant(res.data)
        }
        fetchParticipant()
    }
    , [id])


  return (
    <div className='responsive_container'>
    <h1 className='text-5xl font-bold'>Participant Details</h1>
    {
        participant && (
            <div>
                <div>
                <h1 className='text-4xl font-bold my-5'>Leader Details</h1>
                <div className="flex gap-10 items-center">
                    <div>
                       <h5 className="text-purple-400">Competition Name</h5>
                        
                        <h5 className="text-purple-400">Image</h5>
                    </div>
                    <div>

                   
                    <h5>{participant.competition}</h5>
                    <h5><a className='text-blue-400' href={participant.imageUrl} target='_blank'>View Image</a></h5>
                    </div>
                </div>
                </div>

                <div className='py-10'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>Participant Name</TableCell>
                                <TableCell>Participant Email</TableCell>
                                <TableCell>Participant CNIC</TableCell>
                                <TableCell>Participant Institute</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {participant?.members?.map((p, index) => (
                                <TableRow key={index}>
                                    <TableCell>{p.name}</TableCell>
                                    <TableCell>{p.email}</TableCell>
                                    <TableCell>{p.cnic}</TableCell>
                                    <TableCell>{p.institute}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        )
    }
    </div>
  )
}

export default ParticipantDetails