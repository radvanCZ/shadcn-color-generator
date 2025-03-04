'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormPreview = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    hasError: false,
    isDisabled: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleError = () => {
    setFormState(prev => ({ ...prev, hasError: !prev.hasError }));
  };
  
  const toggleDisabled = () => {
    setFormState(prev => ({ ...prev, isDisabled: !prev.isDisabled }));
  };
  
  return (
    <Card className="form-container">
      <CardHeader>
        <CardTitle>Form Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="toggle-error"
                checked={formState.hasError}
                onCheckedChange={toggleError}
              />
              <Label htmlFor="toggle-error">Show Error State</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="toggle-disabled" 
                checked={formState.isDisabled}
                onCheckedChange={toggleDisabled}
              />
              <Label htmlFor="toggle-disabled">Show Disabled State</Label>
            </div>
          </div>
          
          {/* Preview Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="form-label">Name</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={formState.hasError ? 'error' : ''}
                placeholder="Enter your name"
                disabled={formState.isDisabled}
              />
              {formState.hasError && (
                <p className="error-message">Please enter a valid name</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email" className="form-label">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={formState.hasError ? 'error' : ''}
                placeholder="Enter your email"
                disabled={formState.isDisabled}
              />
              {formState.hasError && (
                <p className="error-message">Please enter a valid email address</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="plan" className="form-label">Subscription Plan</Label>
              <Select disabled={formState.isDisabled}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="form-label">Communication Preferences</Label>
              <RadioGroup defaultValue="email" disabled={formState.isDisabled}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-option" />
                  <Label htmlFor="email-option">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="sms-option" />
                  <Label htmlFor="sms-option">SMS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="push" id="push-option" />
                  <Label htmlFor="push-option">Push Notification</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" disabled={formState.isDisabled} />
              <Label htmlFor="terms" className={formState.hasError ? 'text-form-error' : ''}>
                I agree to the terms and conditions
              </Label>
            </div>
            
            <Button className="w-full" disabled={formState.isDisabled}>
              Submit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormPreview;