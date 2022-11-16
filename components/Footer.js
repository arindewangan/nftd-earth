import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              © NFTD-EARTH — Made by&nbsp;
              <a
                href="https://arindewangan.github.io/portfolio"
                className="hover:text-accent"
              >
                Arin Dewangan
              </a>
            </span>
            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <a href="#" className="hover:text-accent">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
