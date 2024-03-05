'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { CSVLink } from 'react-csv'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import CustomButton from '@/components/ui/CustomButton'

const AllParticipants = () => {
    const [participants, setParticipants] = useState([])
    const [loading, setLoading] = useState(true)
    const [csvData, setCSVData] = useState([])
    useEffect(()=> {
        const fetchParticipants = async () => {
            try{
                const res = await axios.get('/api/participants')
                console.log(res, 'res')
                setParticipants(res.data.reverse())
                setCSVData([
                    ['Leader Name', 'Leader Email', 'Phone', 'Institute', 'Competition Name', 'No of Participants', 'Image', 'Time'],
                    ...res.data.map((p) => [
                        p.members[0].name,
                        p.members[0].email,
                        p.members[0].phoneNo,
                        p.members[0].institute,
                        p.competition,
                        p.noOfParticipants,
                        p.imageUrl,
                        new Date(p.timeStamp).toLocaleString()
                    ])
                ])
                setLoading(false)
            } catch(err) {
                console.log(err, 'error')
            }
            
        }
        fetchParticipants()
    },[])

    function formatAMPM(date) {
        var day = date.getDate();
        var monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
        var month = monthNames[date.getMonth()];
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return day + " " + month + " " + date.getFullYear() + "  " + strTime;
    }

    if(loading) {
        return <h1>Loading...</h1>
    }
  return (
    // Table to display all the participants
    <div className="responsive_container">
        <h1 className="text-6xl my-4">
        All Participants
    </h1>
    <h1 className="text-3xl my-4">
        Total Registrations: {participants.length}
    </h1>
        <div className='flex flex-col w-full justify-center'>
            <CustomButton>
                <CSVLink data={csvData} filename={'participants.csv'}>Download CSV</CSVLink>
            </CustomButton>
       
        <Table className="table-auto">
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Leader Name</TableHead>
                    <TableHead>Leader Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Institute</TableHead>
                    <TableHead>Competion Name</TableHead>
                    <TableHead>No of Participants</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {participants?.map(
                    (
                        participant,
                        index
                    ) => (
                        <TableRow key={participant._id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{participant.members[0].name}</TableCell>
                            <TableCell>{participant.members[0].email}</TableCell>
                            <TableCell>{participant.members[0].phoneNo}</TableCell>
                            <TableCell>{participant.members[0].institute}</TableCell>
                            <TableCell>{participant.competition}</TableCell>
                            <TableCell>{participant.noOfParticipants}</TableCell>
                            <TableCell><a href={participant.imageUrl} target='_blank'>View Image</a></TableCell>
                            <TableCell>{formatAMPM(new Date(participant.timeStamp))}</TableCell>
                            <TableCell>
                                <Link href={`/admin/participants/${participant._id}`}>
                                    <Button>
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    )
                
                )}
            </TableBody>
            </Table>
    </div>
    </div>
  )
}

export default AllParticipants