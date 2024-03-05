"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from 'axios'
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "@/lib/validator";
import { useUploadThing } from '@/lib/uploadthing'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import CustomDropDown from "@/components/ui/CustomDropDown";
import { useToast } from "@/components/ui/use-toast"
import FileUploader from "@/components/FileUploader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const defaultValues = {
  
  competition: "",
  noOfParticipants: 1,
  imageUrl: "",
  memberDetails: [
    {
      name: "",
      email: "",
      cnic: "",
      phoneNo: "",
      institute: "",
    },
  ],
};

const UploadForm = ({ min, max, competitionName, discount }) => {
  const { toast } = useToast()
  const [participantCount, setPartcipantCount] = useState(min);
  const { startUpload } = useUploadThing('imageUploader')
  const [files, setFiles] = useState([]);
  const initialValues = defaultValues;
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: initialValues,
  });
  const onSubmit = async (values) => {
    console.log(values, 'value');
    // submit this form
    let uploadedImageUrl = discount;
    if(discount !== "Free") {
      uploadedImageUrl = values.imageUrl;

      if(files.length > 0) {
        console.log(files, 'files')
        const uploadedImages = await startUpload(files)

        if(!uploadedImages) {
          return
        }

        uploadedImageUrl = uploadedImages[0].url
      }
    }
    
    const data = {
        ...values,
        imageUrl: uploadedImageUrl,
        competition: competitionName,
        };
    console.log(data, 'data');
    try{
        const res = await axios.post('/api/register', data);
        console.log(res, 'res');
        toast({
          title: "Registration Successful",
          description: "You have successfully registered for the competition",
        });
        // empty the form
        form.reset(defaultValues);


    }catch(e){
      console.log(e);
      toast({
        title: "Registration Failed",
        description: e?.response?.data?.message,
      });
    }
  };

  useEffect(() => {
    if (form.getValues('memberDetails').length > participantCount) {
      // If the number of members exceeds participantCount, remove excess members
      const updatedMemberDetails = form.getValues('memberDetails').slice(0, participantCount);
      form.setValue('memberDetails', updatedMemberDetails);
    }
    form.clearErrors()
  }, [participantCount]);

  return (
    <div>
      
      <span className="inline-block p-3 rounded-xl bg-gradient-to-r border border-purple-400 from-purple-600 to-violet-900">
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
      
      
      <Form {...form}>
        
        <form onSubmit={form.handleSubmit(onSubmit)}>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10">Registration Form</h1>
          <Alert variant="warning">
            <AlertTitle>
              Note:
            </AlertTitle>
            <AlertDescription>
            You have to upload payment slip for registration. Please proceed
        further only if you have completed the payment procedure.
            </AlertDescription>
          </Alert>
          <div className="flex flex-wrap items-center lg:w-10/12 mx-auto">
            
            
            
            <div className="w-full p-2">
              <FormField
                control={form.control}
                name="noOfParticipants"
                label="No of Participants"
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
            {participantCount && (
              <div className="w-full p-2">
                
                {participantCount && Array.from({ length: participantCount }, (_, index) => (
                  <div key={index}>
                    <h2
                      
                      className="text-center text-2xl text-slate-300"
                    >
                      { index === 0 ? "Leader" : `Member ${index}`}
                      
                    </h2>
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 p-2">
                        <FormField
                          control={form.control}
                          name={`memberDetails[${index}].name`}
                          label="Name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="border-zinc-400 bg-zinc-950"
                                  placeholder="Enter name"
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
                          name={`memberDetails[${index}].email`}
                          label="Email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="email"
                                  className="border-zinc-400 bg-zinc-950"
                                  placeholder="Enter email"
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
                          name={`memberDetails[${index}].cnic`}
                          label="Enter Member CNIC"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="border-zinc-400 bg-zinc-950"
                                  placeholder="Enter cnic"
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
                          name={`memberDetails[${index}].institute`}
                          label="Enter Institute Name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="border-zinc-400 bg-zinc-950"
                                  placeholder="Enter institute name"
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
                          name={`memberDetails[${index}].phoneNo`}
                          label="Enter Phone Number"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  className="border-zinc-400 bg-zinc-950"
                                  placeholder="Enter Phone Number"
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
            )}
          </div>
          <div className="flex flex-wrap gap-2 p-2 items-center justify-center">
            {/* <UploadDropzone
            className=" md:w-[300px] border border-slate-200 rounded-lg cursor-pointer"
              endpoint="imageUploader"

              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
                form.setValue("imageUrl", res[0].url);
                // check form value
                console.log(form.getValues("imageUrl"));
              }}
              onUploadError={(error) => {
                // Do something with the error.
                console.log(`ERROR! ${error.message}`);
              }}
            /> */}
            {discount !== "Free" && 
            <div className="w-full md:w-1/2 p-2">
              <FormField
                control={form.control}
                name="imageUrl"
                // label="Attach Payment Screenshot"
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
            }
            {/* {imageUrl.length ? (
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt="Payment Screenshot"
            className="md:w-[300px] h-48 object-cover"
            width={300}
            height={200}
          />
        </div>
      ) : null} */}
          </div>
          <div className="text-center my-5">
            <CustomButton type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Register Now"}
            
            </CustomButton>
          </div>
        </form>
      </Form>

      
    </div>
  );
};

export default UploadForm;
