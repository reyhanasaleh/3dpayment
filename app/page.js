"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";

export default function HomePage() {
  const [amount, setAmount] = useState("0");

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <Image src={logo} alt="logo" width={200} className="mb-3" />
          <h5 className="text-center mb-4">Zorlu Dijital 3D Ödeme Sistemi</h5>

          <div className="card shadow-lg rounded-5 text-start border-0">
            <div className="card-body p-4">
              <form
                method="post"
                action={`${process.env.NEXT_PUBLIC_DOMAIN}api/request-hash`}
              >
                <div className="mb-3">
                  <label htmlFor="pan" className="form-label fw-bold">
                    Kart Numarası
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control rounded-pill"
                    name="pan"
                    id="pan"
                    placeholder="1234567890123456"
                    maxLength={20}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cv2" className="form-label fw-bold">
                    CVV
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control rounded-pill"
                    name="cv2"
                    id="cv2"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="expMonth" className="form-label fw-bold">
                      Son Kullanma Tarihi
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control rounded-pill"
                      name="Ecom_Payment_Card_ExpDate_Month"
                      id="expMonth"
                      placeholder="MM"
                      maxLength={2}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="expYear" className="form-label fw-bold">
                      Son Kullanma Tarihi
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control rounded-pill"
                      name="Ecom_Payment_Card_ExpDate_Year"
                      id="expYear"
                      placeholder="YYYY"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardType" className="form-label fw-bold">
                    Kart Türü
                  </label>
                  <select
                    required
                    className="form-select rounded-pill"
                    name="cardType"
                    id="cardType"
                  >
                    <option value="1">Visa</option>
                    <option value="2">MasterCard</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label fw-bold">
                    Miktar
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control rounded-pill"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                {/* Hidden Fields */}
                <input
                  type="hidden"
                  name="clientid"
                  value={process.env.NEXT_PUBLIC_CLIENT_ID}
                />
                <input type="hidden" name="amount" value={amount} />
                <input
                  type="hidden"
                  name="okurl"
                  value={`${process.env.NEXT_PUBLIC_DOMAIN}api/response`}
                />
                <input
                  type="hidden"
                  name="failUrl"
                  value={`${process.env.NEXT_PUBLIC_DOMAIN}api/response`}
                />
                <input type="hidden" name="TranType" value="Auth" />
                <input type="hidden" name="Instalment" value="" />
                <input
                  type="hidden"
                  name="callbackUrl"
                  value={`${process.env.NEXT_PUBLIC_DOMAIN}api/callback`}
                />
                <input type="hidden" name="currency" value="949" />
                <input type="hidden" name="rnd" value={Date.now().toString()} />
                <input type="hidden" name="storetype" value="3D_PAY_HOSTING" />
                <input type="hidden" name="hashAlgorithm" value="Ver3" />
                <input type="hidden" name="lang" value="tr" />
                <input type="hidden" name="BillToName" value="name" />
                <input
                  type="hidden"
                  name="BillToCompany"
                  value="billToCompany"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-lg btn-dark mt-3 px-4 rounded-pill"
                  >
                    Şimdi Öde
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
