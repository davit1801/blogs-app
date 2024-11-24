import React, { useState } from 'react';
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
import { useAtomValue, useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { fillProfileInfo } from '@/supabase/profile';
import { useTranslation } from 'react-i18next';
import { userProfileAtom } from '@/store/profile';

type profileFillsType = {
  avatar_url: string | null;
  full_name_en: string | null;
  full_name_ka: string | null;
  phone_number: string | null;
  id: string;
};

interface UserInfoEditFormProps {
  profile: profileFillsType;
}

const UserInfoEditForm: React.FC<UserInfoEditFormProps> = ({ profile }) => {
  const { t } = useTranslation();
  const user = useAtomValue(userAtom);
  const setProfile = useSetAtom(userProfileAtom);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [profilePayload, setProfilePayload] = useState<profileFillsType>({
    full_name_ka: profile?.full_name_ka,
    full_name_en: profile?.full_name_en,
    phone_number: profile?.phone_number,
    avatar_url: profile?.avatar_url,
    id: profile?.id,
  });

  const { mutate } = useMutation({
    mutationKey: ['profile-info'],
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      setIsDialogOpen(false);
      setProfile((prevValue) => {
        return { prevValue, ...profilePayload };
      });
    },
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
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <FaRegEdit className="cursor-pointer text-2xl" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('profile.edit-profile')}</DialogTitle>
          <DialogDescription>{t('profile.dialog-title')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname_ka" className="text-right">
              სახელი გვარი
            </Label>
            <Input
              id="full_name_ka"
              name="full_name_ka"
              className="col-span-3"
              value={profilePayload.full_name_ka || ''}
              onChange={(e) =>
                handleInputChange('full_name_ka', e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname_en" className="text-right">
              Full name
            </Label>
            <Input
              id="full_name_en"
              name="full_name_en"
              className="col-span-3"
              value={profilePayload.full_name_en || ''}
              onChange={(e) =>
                handleInputChange('full_name_en', e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar_url" className="text-right">
              {t('profile.avatar-url')}
            </Label>
            <Input
              id="avatar_url"
              name="avatar_url"
              className="col-span-3"
              value={profilePayload.avatar_url || ''}
              onChange={(e) => handleInputChange('avatar_url', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone_number" className="text-right">
              {t('profile.phone-number')}
            </Label>
            <Input
              id="phone_number"
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
            {t('profile.save-btn')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoEditForm;
