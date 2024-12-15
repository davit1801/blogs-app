import { Input } from '@/components/ui/input';
import QueryString from 'qs';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@uidotdev/usehooks';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { useTranslation } from 'react-i18next';

type BlogsFilterFormValues = {
  searchText: string;
};

const searchDefaultValues = {
  searchText: '',
};

type PropsType = {
  className: string;
};

const SearchBar: React.FC<PropsType> = ({ className }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: { ...searchDefaultValues, ...parsedSearchParams },
  });
  const watchedSearchText = watch('searchText');
  const debouncedSearchText = useDebounce(watchedSearchText, 700);
  useSetSearchParams(debouncedSearchText);

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Controller
        control={control}
        name="searchText"
        render={({ field: { value, onChange } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              placeholder={t('home.search-bar')}
            />
          );
        }}
      />
    </div>
  );
};

export default SearchBar;
