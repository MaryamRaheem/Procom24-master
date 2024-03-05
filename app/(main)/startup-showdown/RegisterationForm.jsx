'use client'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import {useState, useEffect} from 'react'
import { Input} from "@/components/ui/input";
import axios from 'axios'
import { useForm } from "react-hook-form";
import CustomButton from "@/components/ui/CustomButton";
import { useToast } from "@/components/ui/use-toast"
import FileUploader from "@/components/FileUploader";
import * as z from "zod";
import { useUploadThing } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import CustomDropDown from "@/components/ui/CustomDropDown";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const defaultValues = {
    name: "",
    website: "",
    industry: "",
    noOfMembers: 0,
    team: [{
        name: "",
        position: "",
        email: "",
        phone: ""

    }],
    stage: "",
    description: "",
    problem: "",
    targetMarket: "",
    uniqueValue: "",
    objectives: "",
    expectations: "",
    societyImpact: "",
    imageUrl: "",
};

const registerFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    website: z.string().optional(),
    industry: z.string(),
    noOfMembers: z.string(),
    team: z.array(z.object({
        name: z.string().min(3, "Name must be at least 3 characters"),
        position: z.string(),
        email: z.string().email(),
        phone: z.string().min(11, 'Phone number must be at least 11 characters').max(11, 'Phone number cannot be more than 11 characters'),
        institute: z.string().optional(),
    })),
    stage: z.string(),
    description: z.string(),
    problem: z.string(),
    targetMarket: z.string(),
    uniqueValue: z.string(),
    societyImpact: z.string(),
    objectives: z.string().optional(),
    expectations: z.string(),
    
    // imageUrl: z.string(),
});

const RegisterationForm = ({min, max, note}) => {
    const [participantCount, setPartcipantCount] = useState(1);
    const { toast } = useToast()
    // const { startUpload } = useUploadThing('imageUploader')
    const [files, setFiles] = useState([]);
    const initialValues = defaultValues;
    const form = useForm({
      resolver: zodResolver(registerFormSchema),
      defaultValues: initialValues,
    });

    const onSubmit = async (values) => {
        console.log(values, 'value');
        // submit this form
        // let uploadedImageUrl = values.imageUrl;
    
        // if(files.length > 0) {
        //   console.log(files, 'files')
        //   const uploadedImages = await startUpload(files)
    
        //   if(!uploadedImages) {
        //     return
        //   }
    
        //   uploadedImageUrl = uploadedImages[0].url
        // }
        const data = {
            ...values,
            // imageUrl: uploadedImageUrl,
            };
        console.log(data, 'data');
        try{
            const res = await axios.post('/api/startup', data);
            console.log(res, 'res');
            toast({
              title: "Registration Successful",
              description: "You have successfully registered for the startup showdown",
            });
            // empty the form
            form.reset(defaultValues);
    
    
        }catch(e){
          console.log(e, 'error');
          toast({
            title: "Registration Failed",
            description: e?.response?.data?.message,
          });
        }
      };

  
    return (
    <div className='text-center'>
        <span className="inline-block p-3 rounded-xl bg-gradient-to-r border border-blue-400 bg-blue-600">
        <h1 className="text-2xl font-bold">Bank Account Details</h1>
        <p className="text-slate-300 text-xl my-2 font-bold">
          Bank Title: <span className="text-slate-200 font-normal">HBL (Habib Bank Limited)</span>
        </p>
        <p className="text-slate-300 text-xl my-2 font-bold">
          Account Title: <span className="text-slate-200 font-normal">Usman Yaqoob</span>
        </p>
        <p className="text-slate-300 text-xl my-2 font-bold">
          IBAN Number: <span className="text-slate-200 font-normal">PK84HABB0024707900423403</span>
        </p>
      </span>

        <div className="my-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10">Registration Form</h1>
                    <Alert variant="warning">
                        <AlertTitle>
                        Note:
                        </AlertTitle>
                        <AlertDescription>
                        {note}
                        </AlertDescription>
                    </Alert>
                    <div className="flex flex-wrap items-center lg:w-10/12 mx-auto">
                        <div className="w-full md:w-1/2 p-2">
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Enter startup name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <FormField
                                control={form.control}
                                name="website"
                                label="Website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Enter website"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <FormField
                                control={form.control}
                                name="industry"
                                label="Industry"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Enter industry"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                       
                        <div className="w-full md:w-1/2 p-2">
              <FormField
                control={form.control}
                name="noOfMembers"
                label="Number of Members"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-slate-500">No of Participants</span>
                    </FormLabel>
                    <FormControl>
                      <CustomDropDown
                        min={min}
                        max={max}
                        onChangeHandler={field.onChange}
                        value={field.value}
                        setPartcipantCount={setPartcipantCount}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
                        <div className="w-full p-2">
                            {participantCount && Array.from({ length: participantCount }, (_, i) => (
                                <div key={i} className="pb-6">
                                    <h2 className="text-center text-2xl text-slate-300">
                                    { i === 0 ? "Leader" : `Member ${i}`}</h2>
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-full md:w-1/2 p-2">
                                            <FormField
                                                control={form.control}
                                                name={`team[${i}].name`}
                                                label="Name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                className="border-zinc-400 bg-zinc-950"
                                                                placeholder="Enter member name"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-2">
                                            <FormField
                                                control={form.control}
                                                name={`team[${i}].position`}
                                                label="Position"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                className="border-zinc-400 bg-zinc-950"
                                                                placeholder="Enter member position"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-2">
                                            <FormField
                                                control={form.control}
                                                name={`team[${i}].email`}
                                                label="Email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                type="email"
                                                                className="border-zinc-400 bg-zinc-950"
                                                                placeholder="Enter member email"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-2">
                                            <FormField
                                                control={form.control}
                                                name={`team[${i}].phone`}
                                                label="Phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                className="border-zinc-400 bg-zinc-950"
                                                                placeholder="Enter member phone"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-2">
                                            <FormField
                                                control={form.control}
                                                name={`team[${i}].institute`}
                                                label="University/Institute"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                className="border-zinc-400 bg-zinc-950"
                                                                placeholder="University/Institute"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="stage"
                                label="Stage of the Startup (Idea, MVP, Early Revenue, etc.)"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Stage of the Startup (Idea, MVP, Early Revenue, etc.)"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="description"
                                label="Short Introduction of your startup"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Short Introduction of your startup
                                                "
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="problem"
                                label="Problem being solved"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Problem being solved"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="targetMarket"
                                label="Target Market"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Target Market"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="uniqueValue"
                                label="Unique Value Proposition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Unique Value Proposition"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="societyImpact"
                                label="Impact on Society"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="Impact on Society"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full p-2">
                            <FormField
                                control={form.control}
                                name="expectations"
                                label="What the participant hopes to achieve by attending (networking, feedback, mentorship, etc.)"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                className="border-zinc-400 bg-zinc-950"
                                                placeholder="What the participant hopes to achieve by attending (networking, feedback, mentorship, etc.)"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap gap-2 p-2 items-center justify-center">
                        <div className="w-full md:w-1/2 p-2">
                            <FormField
                                control={form.control}
                                name="imageUrl"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl className="h-72">
                                            <FileUploader
                                                onFieldChange={field.onChange}
                                                imageUrl={field.value}
                                                setFiles={setFiles}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div> */}
                    <div className="text-center my-5">
                        <CustomButton type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? "Submitting..." : "Register Now"}
                        </CustomButton>
                    </div>
                    
                </form>
            </Form>
        </div>
    </div>
  )
}

export default RegisterationForm