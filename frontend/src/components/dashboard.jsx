'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import book from './logo192.jpg'
import laptop from './logo193.jpg'

export function Dashboard() {
  // Sample data from JSON
  const [lostItems, setLostItems] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "2020 Hp laptop",
      location_lost: "Home",
      status: "lost",
      image: laptop,
      tags: ["electronic"],
      time_lost: "2022-01-01T12:00:00Z",
      owners_contact: "+2333456780",
      media_handles: {
        whatsApp: "02345678",
        facebook: "Charles"
      }
    },
    {
      id: 2,
      name: "Note book",
      description: "Exercise book",
      location_lost: "Work",
      status: "found",
      image: book,
      tags: ["book"],
      time_lost: "2022-01-01T12:00:00Z",
      owners_contact: "+2333456780",
      media_handles: {
        facebook: "mends"
      }
    }
  ]);

  const [foundItems, setFoundItems] = useState([
    {
      id: 1,
      name: "Shoes",
      description: "Nike sneakers",
      location_found: "Kt hall",
      retrival_location: "Hilda",
      status: "found",
      image: "/logo192.png",
      tags: ["shoes"],
      time_found: "2022-01-01T12:00:00Z",
      founder_contact: "+2334567890",
      media_handles: {
        facebook: "mends",
        contact2: "+23345678909"
      }
    }
  ]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Lost Items</h1>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Report a Lost Item</h2>
              <Button>Report</Button>
            </div>
            <div className="p-4 grid gap-4">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="ref-number">Reference #</Label>
                <Input id="ref-number" placeholder="LI-001" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="tags">Tags</Label>
                <Select id="tags" multiple>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="keys">Keys</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Campus Library" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="images">Images</Label>
                <Input id="images" type="file" multiple />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="location-found">Description</Label>
                <textarea id="location-found" placeholder="Campus Library" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="date-time">Date & Time</Label>
                <div className="flex items-center gap-2">
                  <Input id="date-time" type="datetime-local" />
                  <Button variant="ghost" size="icon">
                    <CalendarIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <Button type="submit" className="justify-self-end">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Found Items</h1>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Report a Found Item</h2>
              <Button>Report</Button>
            </div>
            <div className="p-4 grid gap-4">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="ref-number-found">Reference #</Label>
                <Input id="ref-number-found" placeholder="FI-001" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="tags-found">Tags</Label>
                <Select id="tags-found" multiple>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="keys">Keys</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="location-found">Location</Label>
                <Input id="location-found" placeholder="Campus Library" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="images-found">Images</Label>
                <Input id="images-found" type="file" multiple />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="location-found">Description</Label>
                <textarea id="location-found" placeholder="Campus Library" />
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Label htmlFor="date-time-found">Date & Time</Label>
                <div className="flex items-center gap-2">
                  <Input id="date-time-found" type="datetime-local" />
                  <Button variant="ghost" size="icon">
                    <CalendarIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <Button type="submit" className="justify-self-end">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Tabs defaultValue="lost">
          <TabsList>
            <TabsTrigger value="lost">Lost Items</TabsTrigger>
            <TabsTrigger value="found">Found Items</TabsTrigger>
          </TabsList>
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input id="search" type="text" />
          </div>
          <TabsContent value="lost">
            <div className="grid gap-4">
              {lostItems.map(item => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <div>
                        <Image
                          src={item.image}
                          alt="Lost Item"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Location Lost:</strong> {item.location_lost}</p>
                        <p><strong>Time Lost:</strong> {new Date(item.time_lost).toLocaleString()}</p>
                        <p><strong>Contact:</strong> {item.owners_contact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="found">
            <div className="grid gap-4">
              {foundItems.map(item => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <div>
                        <img
                          src={item.image}
                          alt="Found Item"
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Location Found:</strong> {item.location_found}</p>
                        <p><strong>Retrieval Location:</strong> {item.retrival_location}</p>
                        <p><strong>Time Found:</strong> {new Date(item.time_found).toLocaleString()}</p>
                        <p><strong>Contact:</strong> {item.founder_contact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}