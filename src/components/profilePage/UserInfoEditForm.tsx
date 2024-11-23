import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaRegEdit } from 'react-icons/fa';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { fillProfileInfo, getProfileInfo } from '@/supabase/profile';

type profileFillsType = {
  avatar_url: string | null;
  full_name_en: string | null;
  full_name_ka: string | null;
  phone_number: string | null;
  id: string;
};

const UserInfoEditForm: React.FC = () => {
  const user = useAtomValue(userAtom);
  const [profilePayload, setProfilePayload] = useState<profileFillsType>({
    full_name_ka: '',
    full_name_en: '',
    phone_number: '',
    id: '',
    avatar_url: '',
  });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => {
        setProfilePayload({
          full_name_ka: res[0].full_name_ka,
          full_name_en: res[0].full_name_en,
          phone_number: res[0].phone_number,
          avatar_url: res[0].avatar_url,
          id: res[0].id,
        });
      });
    }
  }, [user]);

  const { mutate } = useMutation({
    mutationKey: ['fill-profile-info'],
    mutationFn: fillProfileInfo,
  });

  const handleInputChange = (inputIdentifier: string, newValue: string) => {
    setProfilePayload((prevProfileInfo) => ({
      ...prevProfileInfo,
      [inputIdentifier]: newValue,
    }));
  };

  const handleSubmit = () => {
    if (user?.user.id) {
      mutate({ ...profilePayload, id: user.user.id });
    } else {
      console.error('User ID is missing');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FaRegEdit className="cursor-pointer text-2xl" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              სახელი გვარი
            </Label>
            <Input
              name="full_name_ka"
              className="col-span-3"
              value={profilePayload.full_name_ka || ''}
              onChange={(e) =>
                handleInputChange('full_name_ka', e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Full name
            </Label>
            <Input
              name="full_name_en"
              className="col-span-3"
              value={profilePayload.full_name_en || ''}
              onChange={(e) =>
                handleInputChange('full_name_en', e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Avatar URL
            </Label>
            <Input
              name="avatar_url"
              className="col-span-3"
              value={profilePayload.avatar_url || ''}
              onChange={(e) => handleInputChange('avatar_url', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phone Number
            </Label>
            <Input
              name="phone_number"
              className="col-span-3"
              value={profilePayload.phone_number || ''}
              onChange={(e) =>
                handleInputChange('phone_number', e.target.value)
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoEditForm;
