'use client'
import React from 'react'

export const PostBanner = ({ Title, filter, manage }: { Title: string, filter?: string, manage: string }) => {
    return (
        <div>
            <div>
                <div className="post_banner">
                    <p>{Title}</p>
                    <div className="buttons">
                        <button className="button_tab">
                            {filter}
                        </button>
                        <button className="button_tab">
                            {manage}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}