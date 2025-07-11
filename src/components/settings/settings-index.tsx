
import { useState } from 'react';
import {
  Shield,
  CreditCard,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  category: string;
}

export default function SettingsIndex() {
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Financial enthusiast focused on building wealth through smart investments and budgeting.',
    timezone: 'America/New_York',
    currency: 'USD',
    language: 'en',
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState<
    NotificationSetting[]
  >([
    {
      id: '1',
      title: 'Goal Reminders',
      description: 'Get notified about goal deadlines and milestones',
      enabled: true,
      category: 'goals',
    },
    {
      id: '2',
      title: 'Budget Alerts',
      description: "Receive alerts when you're close to budget limits",
      enabled: true,
      category: 'budget',
    },
    {
      id: '3',
      title: 'Investment Updates',
      description: 'Market updates and portfolio performance notifications',
      enabled: false,
      category: 'investments',
    },
    {
      id: '4',
      title: 'Weekly Reports',
      description: 'Weekly summary of your financial progress',
      enabled: true,
      category: 'reports',
    },
    {
      id: '5',
      title: 'Security Alerts',
      description: 'Login attempts and security-related notifications',
      enabled: true,
      category: 'security',
    },
    {
      id: '6',
      title: 'Marketing Emails',
      description: 'Product updates and promotional content',
      enabled: false,
      category: 'marketing',
    },
  ]);

  const [billingData] = useState({
    plan: 'Pro',
    status: 'Active',
    nextBilling: '2024-02-15',
    amount: '$19.99',
    paymentMethod: '**** **** **** 4242',
  });
   const handleProfileUpdate = () => {
    // Mock update logic
    console.log('Profile updated:', profileData);
  };

  const handlePasswordChange = () => {
    // Mock password change logic
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Password changed');
    setSecurityData({
      ...securityData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleNotificationToggle = (id: string) => {
    setNotificationSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const exportData = () => {
    // Mock export functionality
    console.log('Exporting user data...');
  };

  const deleteAccount = () => {
    // Mock delete functionality
    if (
      confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      console.log('Account deletion requested');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Content */}
      <main className="flex flex-1 flex-col gap-4 py-4 px-1 lg:gap-6 lg:p-6">
        <Tabs defaultValue="profile" className="space-y-4 w-full">
          <TabsList className="grid w-full grid-cols-5 text-xs lg:text-base">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your personal information and profile details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/avatars/01.png" alt="Profile" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 bg-transparent"
                    >
                      Remove Photo
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    rows={3}
                  />
                </div>

                <Button
                  onClick={handleProfileUpdate}
                  style={{ backgroundColor: '#194e3e' }}
                  className="hover:bg-[#2d7a5f]"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
                <CardDescription>
                  Manage your password and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={securityData.currentPassword}
                        onChange={(e) =>
                          setSecurityData({
                            ...securityData,
                            currentPassword: e.target.value,
                          })
                        }
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={securityData.newPassword}
                      onChange={(e) =>
                        setSecurityData({
                          ...securityData,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={securityData.confirmPassword}
                      onChange={(e) =>
                        setSecurityData({
                          ...securityData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Button onClick={handlePasswordChange} variant="outline">
                    Change Password
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch
                      checked={securityData.twoFactorEnabled}
                      onCheckedChange={(checked) =>
                        setSecurityData({
                          ...securityData,
                          twoFactorEnabled: checked,
                        })
                      }
                    />
                  </div>

                  {securityData.twoFactorEnabled && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Two-factor authentication is enabled
                        </span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Your account is protected with 2FA
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {notificationSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <Label>{setting.title}</Label>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <Switch
                      checked={setting.enabled}
                      onCheckedChange={() =>
                        handleNotificationToggle(setting.id)
                      }
                    />
                  </div>
                ))}

                <Separator />

                <div className="space-y-4">
                  <Label>Notification Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily digest</SelectItem>
                      <SelectItem value="weekly">Weekly summary</SelectItem>
                      <SelectItem value="monthly">Monthly report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
                <CardDescription>
                  Manage your subscription and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{billingData.plan} Plan</h3>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {billingData.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Next billing:{' '}
                      {new Date(billingData.nextBilling).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {billingData.amount}/month
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 bg-transparent"
                    >
                      Change Plan
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Visa ending in 4242</div>
                        <div className="text-sm text-muted-foreground">
                          Expires 12/2025
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button variant="outline">View Billing History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select
                      value={profileData.timezone}
                      onValueChange={(value) =>
                        setProfileData({ ...profileData, timezone: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">
                          Eastern Time
                        </SelectItem>
                        <SelectItem value="America/Chicago">
                          Central Time
                        </SelectItem>
                        <SelectItem value="America/Denver">
                          Mountain Time
                        </SelectItem>
                        <SelectItem value="America/Los_Angeles">
                          Pacific Time
                        </SelectItem>
                        <SelectItem value="UTC">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select
                      value={profileData.currency}
                      onValueChange={(value) =>
                        setProfileData({ ...profileData, currency: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="CAD">CAD (C$)</SelectItem>
                        <SelectItem value="AUD">AUD (A$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>


               </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible and destructive actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="space-y-0.5">
                    <Label className="text-red-800">Export Account Data</Label>
                    <p className="text-sm text-red-700">
                      Download all your account data
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={exportData}
                    className="border-red-200 text-red-600 hover:bg-red-100 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="space-y-0.5">
                    <Label className="text-red-800">Delete Account</Label>
                    <p className="text-sm text-red-700">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={deleteAccount}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
