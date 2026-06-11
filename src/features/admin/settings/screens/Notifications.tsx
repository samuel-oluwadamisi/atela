import Button from '@/shared/components/Button'
import ToggleBar from '@/shared/components/ToggleBar'
import React from 'react'

const NotificationsScreen = () => {

    const preferences = [
        {title: 'Low Stock Alert', description: 'Control which events trigger alerts in your dashboard.'},
        {title: 'Batch Approval Request', description: 'When a cutter submits a batch for review.'},
        {title: 'Deadline Warnings', description: 'Orders approaching their target date.'},
        {title: 'Staff Activity Fields', description: 'When workers complete or start tasks.'},
        {title: 'Weekly Summary Report', description: 'A digest of factory output every Monday.'}
    ]
  return (
    <>
        <div className="bg-white border border-[#E8E1D9] rounded-4xl p-8">
            <p className="font-black text-[17px] text-[#2A1F1A]">Notifications</p>
            <p className="font-medium text-xs text-[#6E5F54] mt-1.5">
                Control which events trigger alerts in your dashboard
            </p>
            <div className='border-t border-[#E8E1D9] mt-6' />
            
            {
                preferences.map((preference, index)=> (
                    <ToggleBar key={index} {...preference }/>
                ))
            }

        </div>
        <div className='mt-3 text-right'>
            <Button label='Save Changes' variant='primary' />
        </div>
    </>
  )
}

export default NotificationsScreen