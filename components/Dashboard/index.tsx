"use client";

import { Avatar, Button, Card, CardContent, CardMedia, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import MenuCard from "../lib/MenuCard";
import Input from "../lib/Input";
import { PizzaData } from "../../utils/constants";

const Dashboard = () => {
  return (
    <main className="min-h-screen">
      <section className="text-white py-24 flex flex-col bg-[url('/assets/images/background.jpg')] bg-no-repeat bg-cover">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Pizza Palace</h2>
          <p className="text-lg md:text-xl mb-8">Delicious pizzas made with the freshest ingredients.</p>
          <div className="flex justify-center space-x-4 min-h-full">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-white text-[#bd3d3e] px-6 py-3 font-medium hover:bg-[#bd3d3e] hover:text-white transition-colors"
              href="#menu"
            >
              Menu
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-[#bd3d3e] px-6 py-3 font-medium hover:bg-white hover:text-[#bd3d3e] transition-colors"
              href="#customize"
            >
              Customize Pizza
            </Link>
          </div>
        </div>
      </section>
      <section className="relative py-12 md:py-24 bg-[url('/assets/images/h6.jpg')] bg-no-repeat bg-cover" id="menu">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PizzaData.map((el, i) => (
              <MenuCard key={i.toString()} title={el.title} description={el.description} imageUrl={el.imageUrl} price={el.price} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#bd3d3e] text-white py-12 md:py-24" id="customize">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customize Your Pizza</h2>
          <p className="text-lg md:text-xl mb-8">Build your perfect pizza with our easy-to-use customization tool.</p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-white text-[#bd3d3e] px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
            href="/customizer"
          >
            Start Customizing
          </Link>
        </div>
      </section>
      <section className="py-12 md:py-24" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardMedia component="img" height={225} src="/assets/images/place1.jpeg" alt="Downtown Location" />

              <CardContent>
                <h3 className="text-xl font-bold mb-2">Downtown Location</h3>
                <p className="text-gray-500 mb-4">123 Main Street, Anytown USA</p>
                <div className="flex justify-between items-center">
                  <Button variant="text" className="text-black">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardMedia component="img" height={225} src="/assets/images/place2.jpeg" alt="Downtown Location" />
              <CardContent>
                <h3 className="text-xl font-bold mb-2">Uptown Location</h3>
                <p className="text-gray-500 mb-4">456 Oak Street, Anytown USA</p>
                <div className="flex justify-between items-center">
                  <Button variant="text" className="text-black">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardMedia component="img" height={225} src="/assets/images/place3.jpeg" alt="Downtown Location" />
              <CardContent>
                <h3 className="text-xl font-bold mb-2">Suburban Location</h3>
                <p className="text-gray-500 mb-4">789 Elm Road, Anytown USA</p>
                <div className="flex justify-between items-center">
                  <Button variant="text" className="text-black">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#bd3d3e] text-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg md:text-xl mb-8">Hear from our satisfied customers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-gray-300">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  The pizza at Pizza Palace is absolutely delicious! The crust is perfectly crispy and the toppings are always fresh. I highly
                  recommend it.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-gray-300">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  I&apos;ve tried a lot of pizza places, but Pizza Palace is by far the best. The customer service is excellent and the pizzas are
                  always made with care.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">Bob Johnson</h3>
                    <p className="text-gray-300">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  I&apos;m a regular at Pizza Palace and I&apos;ve never been disappointed. The pizzas are always hot, fresh, and delicious. I highly
                  recommend it to anyone looking for a great pizza experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <Input placeholder="Enter your name" id="name" />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <TextareaAutosize
                    className="w-full border border-1 border-grey-600 rounded-md pl-1"
                    id="message"
                    placeholder="Enter your message"
                    minRows={3}
                  />
                </div>
                <Button
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>123 Main Street, Anytown USA</p>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>(123) 456-7890</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@pizzapalace.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Hours</h4>
                  <p>Monday - Sunday: 11am - 10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
