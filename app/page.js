"use client";

export default function HomePage() {
  const orgClientId = "120000335";
  const orgAmount = "1.00";
  const orgOkUrl = `${process.env.NEXT_PUBLIC_DOMAIN}api/response`;
  const orgFailUrl = `${process.env.NEXT_PUBLIC_DOMAIN}api/response`;
  const orgTransactionType = "Auth";
  const orgInstallment = "";
  const orgRnd = Date.now().toString();
  const orgCallbackUrl = `${process.env.NEXT_PUBLIC_DOMAIN}api/callback`;
  const orgCurrency = "949";

  return (
    <center>
      <form
        method="post"
        action={`${process.env.NEXT_PUBLIC_DOMAIN}api/request-hash`}
      >
        <table>
          <tbody>
            <tr>
              <td>Credit Card Number</td>
              <td>
                <input type="text" name="pan" size="20" />
              </td>
            </tr>
            <tr>
              <td>CVV</td>
              <td>
                <input type="text" name="cv2" size="4" />
              </td>
            </tr>
            <tr>
              <td>Expiration Date Year</td>
              <td>
                <input type="text" name="Ecom_Payment_Card_ExpDate_Year" />
              </td>
            </tr>
            <tr>
              <td>Expiration Date Month</td>
              <td>
                <input type="text" name="Ecom_Payment_Card_ExpDate_Month" />
              </td>
            </tr>
            <tr>
              <td>Choosing Visa / Master Card</td>
              <td>
                <select name="cardType">
                  <option value="1">Visa</option>
                  <option value="2">MasterCard</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input type="submit" value="Complete Payment" />
              </td>
            </tr>
          </tbody>
        </table>

        <input type="hidden" name="clientid" value={orgClientId} />
        <input type="hidden" name="amount" value={orgAmount} />
        <input type="hidden" name="okurl" value={orgOkUrl} />
        <input type="hidden" name="failUrl" value={orgFailUrl} />
        <input type="hidden" name="TranType" value={orgTransactionType} />
        <input type="hidden" name="Instalment" value={orgInstallment} />
        <input type="hidden" name="callbackUrl" value={orgCallbackUrl} />
        <input type="hidden" name="currency" value={orgCurrency} />
        <input type="hidden" name="rnd" value={orgRnd} />
        <input type="hidden" name="storetype" value="3d" />
        <input type="hidden" name="hashAlgorithm" value="ver3" />
        <input type="hidden" name="lang" value="tr" />
        <input type="hidden" name="BillToName" value="name" />
        <input type="hidden" name="BillToCompany" value="billToCompany" />
      </form>
    </center>
  );
}
