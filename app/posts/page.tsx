"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { HiSearch } from "react-icons/hi";
import PostPreviewCard from "@/components/PostPreviewCard";
import { BLOG_POSTS } from "@/lib/content";
import { Post } from "@/lib/typesDefinition";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function PostsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 8;

  const posts: Post[] = BLOG_POSTS;

  const filteredPosts = useMemo(() => {
    const searchTerm = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
    );
  }, [searchQuery, posts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, filteredPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="px-4 py-20 md:py-24 mt-8 lg:mt-16 md:px-6 lg:px-8 min-h-[90vh]">
      <section className="container mx-auto">
        <header className="flex justify-center">
          <div className="relative w-96 mb-8">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-96 rounded-md pl-8"
            />
          </div>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 justify-around lg:grid-cols-3 xl:grid-cols-4 mb-10">
          {currentPosts.map((post) => (
            <PostPreviewCard post={post} key={post.id} />
          ))}
        </div>

        {currentPosts.length > 0 ? (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePrevious}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {pageNumbers.map((number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                    onClick={() => setCurrentPage(number)}
                    isActive={currentPage === number}
                    className={
                      currentPage === number
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-bold"
                        : "hover:bg-muted cursor-pointer"
                    }
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={handleNext}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : (
          <Alert variant="destructive" className="max-w-sm mx-auto py-8">
            <AlertDescription className="flex gap-5 items-center font-semibold">
              <AlertCircle className="h-8 w-8 font-bold" />
              No Results Found!
            </AlertDescription>
          </Alert>
        )}
      </section>
    </div>
  );
}

export default PostsPage;
