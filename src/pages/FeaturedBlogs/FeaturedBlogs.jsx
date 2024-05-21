import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';
import '../FeaturedBlogs/FeaturedBlog.css'; // Import your custom styles

const FeaturedBlogs = () => {
    const loadedBlogs = useLoaderData();

    const calculateWordCount = (text) => {
        return text ? text.split(/\s+/).length : 0;
    };

    const topBlogs = React.useMemo(() => {
        return loadedBlogs
            .map(blog => ({
                ...blog,
                wordCount: calculateWordCount(blog.longDescription),
            }))
            .sort((a, b) => b.wordCount - a.wordCount)
            .slice(0, 10);
    }, [loadedBlogs]);

    const data = React.useMemo(() => topBlogs, [topBlogs]);

    const columns = React.useMemo(
        () => [
            {
                header: 'Serial Number',
                cell: (info) => info.row.index + 1,
            },
            {
                accessorKey: 'title',
                header: 'Blog Title',
            },
            {
                accessorKey: 'author',
                header: 'Blog Owner',
            },
            {
                accessorKey: 'profilePicture',
                header: 'Blog Owner Profile Picture',
                cell: info => (
                    <img
                        src={info.getValue()}
                        alt="Profile"
                        className="table-img"
                    />
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="my-10">
            <h3>Top 10 Blogs by Word Count</h3>
            <table className="table">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {header.column.getIsSorted()
                                        ? header.column.getIsSorted() === 'desc'
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </button>
                <span>
                    Page <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong>
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </button>
            </div>
            <div className="pagination">
                <span>
                    Rows per page:
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
