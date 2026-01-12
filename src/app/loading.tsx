import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div className='flex items-center gap-3'>
        <Spinner />
      </div>
    </div>
  );
}
