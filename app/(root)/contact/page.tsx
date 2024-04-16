"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { contactData } from "@/config/constants";
import { formSchema } from "@/lib/validation";
import { FormType, IconType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const iconMap: IconType = {
  map: <MapPin />,
  phone: <Phone />,
  mail: <Mail />,
  send: <Send />,
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactInformation: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const { data } = await axios.post<FormType>("/api/contact", {
        ...values,
      });
      if (data.success) {
        form.reset();
        return toast({
          title: "Sending was successful",
          description: "Thanks, We will contact you soon!",
        });
      } else {
        return toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      return toast({
        title: "Error",
        description: error as string,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-screen sm:ml-[20%] p-6 pt-9 sm:p-10 sm:px-20 md:px-28 relative bg-gray-950">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 ml-10 text-2xl sm:text-4xl font-semibold"
      >
        Contact Informations
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid sm:grid-cols-2 md:grid-cols-2 gap-8"
      >
        {contactData.map((contact) => (
          <li key={contact.type} className="w-full 2xl:m-auto xl:flex justify-start gap-2">
            <span className="flex gap-2 capitalize text-slate-400">
              {iconMap[contact.icon]} {contact.type}:
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleClick(contact.link)}
            >
              {contact.label}
            </span>
          </li>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="lg:w-[50%] md:w-[80%] w-full mt-10 p-8 flex flex-col bg-slate-800/30 rounded-lg shadow-md"
      >
        <h2 className="text-gray-200 text-2xl mb-4 font-medium title-font">
          Contact Me
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactInformation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Contact information"
                      className="px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="px-4 py-6 text-lg resize-none  focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="w-1/3 py-6 text-xl disabled:cursor-wait"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
