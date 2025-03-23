import { CardDescription, CardTitle } from "@ui/card";

import { CardHeader } from "@ui/card";

import { CardContent } from "@ui/card";

import { Button } from "@ui/button";
import { Card, CardFooter } from "@ui/card";

export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Automations</h2>
        <div className="h-px bg-gray-800 w-full mb-4"></div>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Abandoned Cart Recovery</CardTitle>
              <CardDescription>
                Message members about forgotten items in their cart
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Automatically send reminders to customers who left items in
                their cart. Increase conversion rates with personalized
                follow-ups.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Member Check-in</CardTitle>
              <CardDescription>
                Follow up with members for feedback and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Schedule regular check-ins with your members to gather feedback
                and maintain engagement. Build stronger relationships.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Welcome Message</CardTitle>
              <CardDescription>
                Greet new members with custom automated messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Create personalized welcome messages that automatically send to
                new members. Make a great first impression.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discount Promotions</CardTitle>
              <CardDescription>
                Automated discount code distribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Schedule and send promotional discounts to targeted member
                segments. Drive sales with timely offers.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Member Updates</CardTitle>
              <CardDescription>
                Keep members informed with automated updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Send automated updates about new content, features, or important
                announcements to your member base.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Emails</CardTitle>
              <CardDescription>
                Automated email marketing campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Create and schedule marketing email sequences to nurture leads
                and engage existing members.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="my-auto">Setup Automation</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
